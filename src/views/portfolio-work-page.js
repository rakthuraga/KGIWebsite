import React from 'react'

import { Helmet } from 'react-helmet'

import './portfolio-work-page.css'

const PortfolioWorkPage = (props) => {
  return (
    <div className="portfolio-work-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="portfolio-work-page-portfolio-work-page">
        <div className="portfolio-work-page-navigation-bar">
          <img
            alt="sitelogoI313"
            src="/sitelogoi313-reyk.svg"
            className="portfolio-work-page-sitelogo"
          />
          <div className="portfolio-work-page-menu">
            <div className="portfolio-work-page-about">
              <span className="portfolio-work-page-text10 Navigation">
                About
              </span>
            </div>
            <div className="portfolio-work-page-contact">
              <span className="portfolio-work-page-text11 Navigation">
                Contact
              </span>
            </div>
            <div className="portfolio-work-page-work">
              <span className="portfolio-work-page-text12 Navigation">
                Work
              </span>
            </div>
            <div className="portfolio-work-page-playground">
              <span className="portfolio-work-page-text13 Navigation">
                Playground
              </span>
            </div>
          </div>
        </div>
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
  )
}

export default PortfolioWorkPage
