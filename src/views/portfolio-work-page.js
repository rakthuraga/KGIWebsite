import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import './portfolio-work-page.css'

const PortfolioWorkPage = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: 'About', className: 'portfolio-work-page-text' },
    { label: 'Services', className: 'portfolio-work-page-text' },
    { label: 'Partners', className: 'portfolio-work-page-text' },
    { label: 'Investors', className: 'portfolio-work-page-text' },
    { label: 'Team', className: 'portfolio-work-page-text' },
    { label: 'Contact', className: 'portfolio-work-page-text' },
  ];
  return (
    <div className="portfolio-work-page-container">
      <Helmet>
        <title>KGI Corporate</title>
      </Helmet>
      <div className="portfolio-work-page-portfolio-work-page">
        <nav className="portfolio-work-page-navigation-bar" role="navigation">
          <img
            alt="KGIcorporatelogoI313"
            src="/logo.png"
            className="portfolio-work-page-sitelogo"
          />
          {/* Desktop nav links */}
          <div className="portfolio-desktop-menu">
            {navLinks.map((item, i) => (
              <span key={item.label + i} className={`${item.className} Navigation`}>
                {item.label}
              </span>
            ))}
          </div>
          {/* Hamburger for mobile */}
          <button
            className={`portfolio-hamburger${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
        {/* Fullscreen overlay menu */}
        {menuOpen && (
          <div className="portfolio-fullscreen-menu" id="main-nav-menu" role="menu">
            <button
              className="portfolio-menu-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="portfolio-fullscreen-menu-items">
              {navLinks.map((item, i) => (
                <button
                  key={item.label + i}
                  className="portfolio-fullscreen-menu-link"
                  tabIndex={0}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className={`${item.className} Navigation`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
        {/* ...existing page content... */}

        {/* Main content below nav/menu */}
        <div className="portfolio-work-page-section">
          <div className="portfolio-work-page-headline">
            <span className="portfolio-work-page-text14 Heading-1">
              <span>Hello, I’m Mehmet Akif.</span>
              <br></br>
            </span>
            <img
              alt="SVG3220"
              src="/svg3220-bae.svg"
              className="portfolio-work-page-svg"
            />
            <span className="portfolio-work-page-text17 Heading-2">
              <span className="portfolio-work-page-text18">
                A senior-year design student who trying to specialize in 3D
                modeling &amp; texturing.
              </span>
              <br></br>
              <br></br>
            </span>
          </div>
          <div className="portfolio-work-page-body1">
            <span className="portfolio-work-page-text21">
              01 / PROJECT NAME
            </span>
            <span className="portfolio-work-page-text22">
              <span>
                Goblin concept digital sculpture with human-like skin. Learned a
                lot of quick tips and look development.
              </span>
              <br></br>
              <br></br>
              <br></br>
            </span>
            <span className="portfolio-work-page-text27 SubText">
              Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured
              in Mari, Rendered using Arnold.
            </span>
            <span className="portfolio-work-page-text28 SubHeaderLink">
              More shots from this project ↗
            </span>
            <img
              alt="ThumbnailI281"
              src="/thumbnaili281-wwzo-400h.png"
              className="portfolio-work-page-thumbnail1"
            />
            <img
              alt="SeperatorI281"
              src="/seperatori281-897d.svg"
              className="portfolio-work-page-seperator1"
            />
          </div>
          <div className="portfolio-work-page-body2">
            <span className="portfolio-work-page-text29">
              02 / PROJECT NAME
            </span>
            <span className="portfolio-work-page-text30">
              <span>
                Subsurface weight, specular roughness, diffuse maps generated
                with the procedure and manual techniques.
              </span>
              <br></br>
            </span>
            <span className="portfolio-work-page-text33 SubHeaderLink">
              See case study →
            </span>
            <img
              alt="ThumbnailI281"
              src="/thumbnaili281-pfpb-400h.png"
              className="portfolio-work-page-thumbnail2"
            />
            <img
              alt="SeperatorI281"
              src="/seperatori281-onv.svg"
              className="portfolio-work-page-seperator2"
            />
          </div>
          <div className="portfolio-work-page-body3">
            <span className="portfolio-work-page-text34">
              03 / PROJECT NAME
            </span>
            <span className="portfolio-work-page-text35">
              <span>Experimental creature modeling for school project.</span>
              <br></br>
              <br></br>
              <br></br>
            </span>
            <span className="portfolio-work-page-text40 SubHeaderLink">
              Project WIP
            </span>
            <img
              alt="ThumbnailI281"
              src="/thumbnaili281-jgo-400h.png"
              className="portfolio-work-page-thumbnail3"
            />
            <img
              alt="SeperatorI281"
              src="/seperatori281-ezuk.svg"
              className="portfolio-work-page-seperator3"
            />
          </div>
        </div>
        <div className="portfolio-work-page-footer">
          <span className="portfolio-work-page-text41 Navigation">
            <span>Mehmet Akif Karasu ⏤ 2020</span>
            <br></br>
          </span>
          <span className="portfolio-work-page-text44 Navigation">
            <span>Artstation</span>
            <br></br>
          </span>
          <span className="portfolio-work-page-text47 Navigation">
            Linkedin
          </span>
          <span className="portfolio-work-page-text48 Navigation">Twitter</span>
        </div>
      </div>
    </div>
  );
}

export default PortfolioWorkPage
