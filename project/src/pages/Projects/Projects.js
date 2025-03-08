import React from "react";
import "./Project.css";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import Zoom from 'react-reveal/Zoom';

const Project = () => {
  return (
    <>
      <div className="continer project" id="project">
        <Slide direction="up" duration={500}>

        <h2 className="project-heading">
          TOP RECENT PROJECTS
        </h2>
        </Slide>
        <hr />
        <Fade>

        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        </Fade>
        {/* card design */}
        <Zoom>
        <div className="row" id="ads">
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      MDKD Shopping Website
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mobiel APP</span>
                  <img
                    src="https://www.banken.nl/illustrations/news/detail/1486139081923_Beleggen-met-de-ABN-AMRO-mobiel-bankieren-app.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React Native</span>
                  <span className="card-detail-badge">IOS/ANDROID</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      KD Coding APP
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">AirPlane Resevation System</span>
                  <img
                    src="https://imageio.forbes.com/specials-images/imageserve/6440e37e940683175fbffcf0/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">C++</span>
                  <span className="card-detail-badge">MYSQL</span>
                  <span className="card-detail-badge">CLI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                        AirLuxe
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Isuru4043/Airline-Reservation-System"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
        </div>
        </Zoom>
      </div>
    </>
  );
};

export default Project;