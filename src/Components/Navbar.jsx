import React from "react";
import { FaFacebook, FaDribbble, FaFlickr, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Assets/rsz_1rsz_logo__1_-removebg-preview.png";
import "../Styles/Navbar.css";
import "../Styles/style.css";

function Navbar() {
  return (
    <header className="header-area">
      <div className="pixel-main-menu" id="sticker">
        <div className="classy-nav-container breakpoint-off">
          <div className="container-fluid">
            <nav className="classy-navbar justify-content-between" id="pixelNav">
              <Link to="/" className="nav-brand">
                <img
                  className="mb-30"
                  src={Logo}
                  alt="Logo"
                  style={{ width: "150px", height: "auto", marginTop: "20px" }}
                />
              </Link>
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
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  <div className="top-social-info ml-5">
                    <Link to="#">
                      <FaFacebook />
                    </Link>
                    <Link to="#">
                      <FaDribbble />
                    </Link>
                    <Link to="#">
                      <FaFlickr />
                    </Link>
                    <Link to="#">
                      <FaInstagram />
                    </Link>
                    <Link to="#">
                      <FaLinkedin />
                    </Link>
                    <Link to="#">
                      <FaPinterest />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
