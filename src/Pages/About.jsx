import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function About() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      {/* Feature Area */}
      <section className="pixel-feature-area d-flex flex-wrap">
        <div
          className="feature-thumbnail bg-img jarallax"
          style={{ backgroundImage: "url(img/bg-img/travel-2.jpg)" }}
        ></div>
        <div className="feature-content">
          <h1>Explore the World with Us</h1>
          <p>
            Welcome to our travel blog! We're passionate about discovering new
            places and sharing our adventures with you. Whether it's a bustling
            city or a serene beach, we bring you stories and tips from our
            travels.
          </p>
          <p>
            Join us as we explore the hidden gems, local cuisines, and cultures
            around the globe. We believe travel is more than just visiting
            places; it's about experiencing life in different parts of the
            world.
          </p>
          <a href="#" className="btn pixel-btn mt-15">
            CONTINUE READING
          </a>
        </div>
      </section>

      <section className="pixel-feature-area d-flex flex-wrap">
        <div className="feature-content">
          <h1>Travel Tips and Guides</h1>
          <p>
            Planning a trip can be daunting, but we're here to help. From
            packing lists to itinerary suggestions, we provide practical advice
            to make your travel experience smoother and more enjoyable.
          </p>
          <p>
            Discover the best times to visit, must-see attractions, and local
            customs to enrich your travel experience. Our guides are designed to
            help you make the most of your journeys.
          </p>
          <a href="#" className="btn pixel-btn mt-15">
            CONTINUE READING
          </a>
        </div>
        <div
          className="feature-thumbnail bg-img jarallax"
          style={{ backgroundImage: "url(img/bg-img/travel-3.jpg)" }}
        ></div>
      </section>

      {/* Cool Facts Area */}
      <section className="pixel-cool-facts-area bg-gray section-padding-100-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-fact mb-100">
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
              <div className="single-cool-fact mb-100">
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
              <div className="single-cool-fact mb-100">
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
              <div className="single-cool-fact mb-100">
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
              <div className="section-heading text-center">
                <h2>Meet Our Team</h2>
                <img className="mb-30" src="img/core-img/x.png" alt="" />
                <p>
                  Our team of travel enthusiasts is dedicated to bringing you
                  the best travel experiences and tips. Meet the people behind
                  the blog.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-team-member mb-100">
                <img src="img/bg-img/team-1.jpg" alt="" />
                <div className="hover-text d-flex align-items-end justify-content-center text-center">
                  <div className="hover--">
                    <h4>John Doe</h4>
                    <h6>Travel Writer</h6>
                    <div className="social-info">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-team-member mb-100">
                <img src="img/bg-img/team-2.jpg" alt="" />
                <div className="hover-text d-flex align-items-end justify-content-center text-center">
                  <div className="hover--">
                    <h4>Jane Smith</h4>
                    <h6>Photographer</h6>
                    <div className="social-info">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-team-member mb-100">
                <img src="img/bg-img/team-3.jpg" alt="" />
                <div className="hover-text d-flex align-items-end justify-content-center text-center">
                  <div className="hover--">
                    <h4>Emily Johnson</h4>
                    <h6>Content Creator</h6>
                    <div className="social-info">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-envelope"></i>
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
    </>
  );
}

export default About;
