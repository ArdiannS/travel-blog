import React from "react";
import {
  FaFacebook,
  FaDribbble,
  FaFlickr,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import "../Styles/Navbar.css";
import "../Styles/style.css";
import Logo from "../Assets/rsz_1rsz_logo__1_-removebg-preview.png";
function Navbar() {
  return (
    <div>
      <header className="header-area">
        <div className="pixel-main-menu" id="sticker">
          <div className="classy-nav-container breakpoint-off">
            <div className="container-fluid">
              <nav
                className="classy-navbar justify-content-between"
                id="pixelNav"
              >
                <a href="/" className="nav-brand">
                  <img
                    className="mb-30"
                    src={Logo}
                    alt="Logo"
                    style={{
                      width: "150px",
                      height: "auto",
                      marginTop: "20px",
                    }}
                  />
                </a>
                <div className="classy-navbar-toggler">
                  <span className="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div className="classy-menu">
                  <div className="classycloseIcon">
                    <div className="cross-wrap">
                      <span className="top"></span>
                      <span className="bottom"></span>
                    </div>
                  </div>
                  <div className="classynav">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about">About</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>

                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                    <div className="top-social-info ml-5">
                      <a href="#">
                        <FaFacebook />
                      </a>
                      <a href="#">
                        <FaDribbble />
                      </a>
                      <a href="#">
                        <FaFlickr />
                      </a>
                      <a href="#">
                        <FaInstagram />
                      </a>
                      <a href="#">
                        <FaLinkedin />
                      </a>
                      <a href="#">
                        <FaPinterest />
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
