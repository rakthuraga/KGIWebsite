Goal

Save newsletter signups (Name, Email, Timestamp) into a Google Sheet via a Google Apps Script Web App.

Overview

- Create a new Google Sheet and add headers in row 1: Timestamp | Name | Email
- Create a Google Apps Script project attached to the sheet, paste the provided code, and deploy as a Web App (Execute as: Me, Who has access: Anyone, even anonymous).
- Copy the deployed Web App URL and place it into the frontend (public/index.html) in the placeholder variable APPS_SCRIPT_URL.

Apps Script Code (paste into the script editor for the Sheet)

**Multi-sheet routing version** — routes submissions to different tabs based on the `audience` field:

```javascript
function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Parse payload (handles both JSON and form-encoded)
    let payload = {};
    if (e.postData && e.postData.type === 'application/json') {
      payload = JSON.parse(e.postData.contents || '{}');
    } else if (e.parameter) {
      payload = e.parameter;
    }

    const name = (payload.name || '').toString().trim();
    const email = (payload.email || '').toString().trim();
    const audience = (payload.audience || '').toString().trim();
    const timestamp = new Date();

    if (!email) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Missing email' })).setMimeType(ContentService.MimeType.JSON);
    }

    // Route to different sheets based on audience
    let sheetName = 'Sheet1'; // default for newsletter
    if (audience === 'early-access') {
      sheetName = 'Sheet2';
    } else if (audience === 'investor') {
      sheetName = 'Sheet3'; // optional: create Sheet3 for investors
    }

    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: `Sheet "${sheetName}" not found` })).setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow([timestamp, name, email, audience]);
    

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

**Sheet setup for multi-form routing:**
- Sheet1 (Newsletter): `Timestamp | Name | Email | Audience`
- Sheet2 (Early Access): `Timestamp | Name | Email | Audience`
- Sheet3 (Investors, optional): `Timestamp | Name | Email | Audience`

The script automatically routes:
- `audience: 'newsletter'` → Sheet1
- `audience: 'early-access'` → Sheet2
- `audience: 'investor'` → Sheet3

Deploying the Web App

1. In the Google Sheet go to Extensions -> Apps Script.
2. Create a new script file and paste the code above.
3. Save, then click Deploy -> New deployment.
4. Choose "Web app" deployment type.
   - Description: "Newsletter endpoint"
   - Execute as: Me
   - Who has access: Anyone
5. Deploy; copy the Web app URL (it looks like https://script.google.com/macros/s/XXXX/exec).

Frontend wiring

- In `public/index.html` there is a placeholder variable APPS_SCRIPT_URL. Replace that with your deployed Web App URL.
- The frontend will POST JSON { name, email } to the Apps Script endpoint and handle success/failure.

Security notes & optional improvements

- "Anyone, even anonymous" is easiest but publicly callable. For increased security:
  - Add a secret token: have Apps Script check for a shared header (x-api-key) and only accept known token values.
  - Use reCAPTCHA v2/v3 to reduce spam.
  - Use Google Identity to restrict access, but that's more complex (OAuth flows).

Rate limits

- Apps Script has quotas. For low-volume email signups (tens/hundreds/day) this is fine. If you expect thousands/day, consider using a proper backend.

Troubleshooting

- If POST returns HTML page, the Apps Script deployment is likely returning an authorization page — check deployment settings.
- If you get 403, ensure you deployed with "Anyone" access and copied the final "exec" URL (not the editor preview)."