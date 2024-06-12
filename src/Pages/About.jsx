import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import firstImage from "../Assets/5.jpg";
import secondImage from "../Assets/6.jpg";
import employee1 from "../Assets/ardiani.jpg";
import employee2 from "../Assets/albini.jpg";
import employee3 from "../Assets/6.jpg";
import WOW from "wowjs";
import "animate.css";
import "../Styles/style.css";
import "../Styles/bootstrap.min.css";
import {
  FaFacebook,
  FaDribbble,
  FaFlickr,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);
  return (
    <>
      {loading ? (
        <div class="preloader d-flex align-items-center justify-content-center">
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <section className="pixel-feature-area d-flex flex-wrap">
            <div className="feature-content">
              <h1 className="wow fadeInUp" data-wow-delay="100ms">
                Explore the World with Us
              </h1>
              <p className="wow fadeInUp" data-wow-delay="200ms">
                Welcome to our travel blog! We're passionate about discovering
                new places and sharing our adventures with you. Whether it's a
                bustling city or a serene beach, we bring you stories and tips
                from our travels.
              </p>
              <p className="wow fadeInUp" data-wow-delay="300ms">
                Join us as we explore the hidden gems, local cuisines, and
                cultures around the globe. We believe travel is more than just
                visiting places; it's about experiencing life in different parts
                of the world.
              </p>
              <a
                href="#"
                className="btn pixel-btn mt-15 wow fadeInUp"
                data-wow-delay="400ms"
              >
                CONTINUE READING
              </a>
            </div>
            <div
              className="feature-thumbnail bg-img jarallax wow fadeInUp"
              data-wow-delay="500ms"
              style={{ backgroundImage: `url(${secondImage})` }}
            ></div>
          </section>

          <section className="pixel-feature-area d-flex flex-wrap">
            <div
              className="feature-thumbnail bg-img jarallax wow fadeInUp"
              data-wow-delay="100ms"
              style={{ backgroundImage: `url(${firstImage})` }}
            ></div>
            <div className="feature-content">
              <h1 className="wow fadeInUp" data-wow-delay="200ms">
                Travel Tips and Guides
              </h1>
              <p className="wow fadeInUp" data-wow-delay="300ms">
                Planning a trip can be daunting, but we're here to help. From
                packing lists to itinerary suggestions, we provide practical
                advice to make your travel experience smoother and more
                enjoyable.
              </p>
              <p className="wow fadeInUp" data-wow-delay="400ms">
                Discover the best times to visit, must-see attractions, and
                local customs to enrich your travel experience. Our guides are
                designed to help you make the most of your journeys.
              </p>
              <a
                href="#"
                className="btn pixel-btn mt-15 wow fadeInUp"
                data-wow-delay="500ms"
              >
                CONTINUE READING
              </a>
            </div>
          </section>

          {/* Cool Facts Area */}
          <section className="pixel-cool-facts-area bg-gray section-padding-100-0">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div
                    className="single-cool-fact mb-100 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="scf-icon">
                      <img src="img/core-img/world.png" alt="" />
                    </div>
                    <div className="scf-text">
                      <h2>
                        <span className="counter">45</span>
                      </h2>
                      <h6>Countries Visited</h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div
                    className="single-cool-fact mb-100 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="scf-icon">
                      <img src="img/core-img/photos.png" alt="" />
                    </div>
                    <div className="scf-text">
                      <h2>
                        <span className="counter">1200+</span>
                      </h2>
                      <h6>Photos Taken</h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div
                    className="single-cool-fact mb-100 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="scf-icon">
                      <img src="img/core-img/blog.png" alt="" />
                    </div>
                    <div className="scf-text">
                      <h2>
                        <span className="counter">300+</span>
                      </h2>
                      <h6>Blog Posts</h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div
                    className="single-cool-fact mb-100 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="scf-icon">
                      <img src="img/core-img/followers.png" alt="" />
                    </div>
                    <div className="scf-text">
                      <h2>
                        <span className="counter">50K+</span>
                      </h2>
                      <h6>Followers</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Area */}
          <section className="team-member-area section-padding-100-0">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div
                    className="section-heading text-center wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <h2>Meet Our Team</h2>
                    <img className="mb-30" src="img/core-img/x.png" alt="" />
                    <p>
                      Our team of travel enthusiasts is dedicated to bringing
                      you the best travel experiences and tips. Meet the people
                      behind the blog.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="single-team-member mb-100 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <img src={employee1} alt="" width={400} />
                    <div className="hover-text d-flex align-items-end justify-content-center text-center">
                      <div className="hover--">
                        <h4>Ardian Sutaj</h4>
                        <h6>Photographer</h6>
                        <div className="social-info">
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
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="single-team-member mb-100 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <img src={employee2} alt="" width={400} />
                    <div className="hover-text d-flex align-items-end justify-content-center text-center">
                      <div className="hover--">
                        <h4>Albin Shabani</h4>
                        <h6>Photographer</h6>
                        <div className="social-info">
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
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="single-team-member mb-100 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <img src={employee1} alt="" width={400} />
                    <div className="hover-text d-flex align-items-end justify-content-center text-center">
                      <div className="hover--">
                        <h4>Emily Johnson</h4>
                        <h6>Content Creator</h6>
                        <div className="social-info">
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
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      )}
      ;
    </>
  );
}

export default About;
