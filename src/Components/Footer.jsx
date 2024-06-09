import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faFacebook,
  faDribbble,
  faFlickr,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <footer class="footer-area section-padding-100-0">
        <div class="container-fluid">
          <div class="row justify-content-between">
            <div class="col-12 col-sm-6 col-md-3">
              <div class="single-footer-widget mb-100">
                <a href="index.html" class="footer-logo">
                  <img src="img/core-img/logo.png" alt="Logo" />
                </a>
              </div>
            </div>

            <div class="col-12 col-md-9 col-lg-8 col-xl-7">
              <div class="row">
                <div class="col-sm-4">
                  <div class="single-footer-widget mb-100">
                    <h5 class="widget-title">Address</h5>
                    <p>
                      Dukagjini Center <br /> Rruga Qamil Bala, Prishtine(PR),
                      91745
                    </p>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="single-footer-widget mb-100">
                    <h5 class="widget-title">Support</h5>
                    <p>
                      <FontAwesomeIcon icon={faPhone} />
                      <br /> +383 041 2293123
                    </p>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="single-footer-widget mb-100">
                    <h5 class="widget-title">Social</h5>
                    <div class="footer-social-info">
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon icon={faDribbble} />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon icon={faFlickr} />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                      <a href="#">
                        <FontAwesomeIcon icon={faPinterest} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="copywrite-area">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-12 col-md-6">
                <div class="copywrite-content"></div>
              </div>
              <div class="col-12 col-md-6">
                <nav class="footer-nav">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
