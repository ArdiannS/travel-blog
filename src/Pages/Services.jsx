import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import image from "../Assets/pexels-julieaagaard-1374064.jpg";
import image2 from "../Assets/pexels-quang-nguyen-vinh-222549-3355788.jpg";
import image3 from "../Assets/pexels-hikaique-775201.jpg";
import image4 from "../Assets/pexels-jacub-gomez-447561-1142984.jpg";
import image5 from "../Assets/pexels-josh-hild-1270765-2422265.jpg";
import image6 from "../Assets/pexels-ben-maxwell-479813-1194235.jpg";

const Services = () => {
  return (
    <div>
      <Navbar />
      <section
        class="breadcrumb-area bg-img bg-overlay jarallax"
        // style="background-image: url(img/bg-img/8.jpg);"
      >
        <div class="container-fluid h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12">
              <div class="breadcrumb-content">
                <h2>Services</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="services-catagory-area d-flex flex-wrap">
        <div
          className="single-service-cata bg-img d-flex align-items-center justify-content-center jarallax"
          style={{ backgroundImage: `url(${image})` }}
        >
          <a href="#">Mountain Adventures</a>
        </div>
        <div
          className="single-service-cata bg-img d-flex align-items-center justify-content-center jarallax"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <a href="#">
            Beach <br /> Escapes
          </a>
        </div>
        <div
          className="single-service-cata bg-img d-flex align-items-center justify-content-center jarallax"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <a href="#">
            Forest <br /> Retreats
          </a>
        </div>
      </div>

      <section className="services-block-area section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="single-service-block mb-100 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <h4>Hiking Trails</h4>
                <p>
                  Discover the best hiking trails around the world. From easy
                  walks to challenging climbs, we cover them all.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="single-service-block mb-100 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <h4>Wildlife Safaris</h4>
                <p>
                  Experience the thrill of wildlife safaris in exotic locations.
                  Get up close and personal with nature's most magnificent
                  creatures.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="single-service-block mb-100 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <h4>Camping Spots</h4>
                <p>
                  Find the perfect camping spots for your next adventure. We
                  review the top camping locations worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pixel-prices-area d-flex flex-wrap section-padding-100">
        <div className="single-price-table-area mb-100">
          <div className="price-value">
            <h2>
              <span>$9</span>
              <span>/ month</span>
            </h2>
          </div>
          <h2>Explorer Pack</h2>
          <p>Basic access to exclusive travel content and tips.</p>
          <ul className="price-desc">
            <li>
              <img src="img/core-img/correct.png" alt="" /> Monthly travel
              guides
            </li>
            <li>
              <img src="img/core-img/correct.png" alt="" /> Access to blog
              archives
            </li>
            <li>
              <img src="img/core-img/correct.png" alt="" /> Community forum
              access
            </li>
            <li>
              <img src="img/core-img/caution.png" alt="" /> Limited photo
              gallery
            </li>
            <li>
              <img src="img/core-img/correct.png" alt="" /> Newsletter
              subscription
            </li>
          </ul>
          <a href="#" className="btn pixel-btn">
            Subscribe
          </a>
        </div>

        <div className="single-price-table-area mb-100">
          <div className="price-value">
            <h2>
              <span>$19</span>
              <span>/ month</span>
            </h2>
          </div>
          <h2>Adventurer Pack</h2>
          <p>Enhanced access with additional perks and exclusive content.</p>
          <ul className="price-desc">
            <li>
              <img src="img/core-img/correct.png" alt="" /> All Explorer Pack
              features
            </li>
            <li>
              <img src="img/core-img/correct.png" alt="" /> Bi-weekly travel
              guides
            </li>
            <li>
              <img src="img/core-img/correct.png" alt="" /> Full photo gallery
              access
            </li>
            <li>
              <img src="img/core-img/caution.png" alt="" /> Special member
              events
            </li>
            <li>
              <img src="img/core-img/correct.png" alt="" /> Personalized trip
              advice
            </li>
          </ul>
          <a href="#" className="btn pixel-btn">
            Subscribe
          </a>
        </div>

        <div className="single-price-table-area active mb-100">
          <div className="price-value">
            <h2>
              <span>$29</span>
              <span>/ month</span>
            </h2>
          </div>
          <h2>Explorer Pack</h2>
          <p>
            Comprehensive access with premium content and personalized services.
          </p>
          <ul className="price-desc">
            <li>
              <img src="img/core-img/correct.png" alt="" /> All Adventurer Pack
              features
            </li>
            <li>
              <img src="img/core-img/correct.png" alt="" /> Weekly travel guides
            </li>
            <li>
              <img src="img/core-img/correct.png" alt="" /> Exclusive video
              content
            </li>
            <li>
              <img src="img/core-img/caution.png" alt="" /> Priority support
            </li>
            <li>
              <img src="img/core-img/correct.png" alt="" /> Free travel
              merchandise
            </li>
          </ul>
          <a href="#" className="btn pixel-btn">
            Subscribe
          </a>
        </div>

        <div className="single-price-table-area mb-100">
          <div className="price-value">
            <h2>
              <span>$39</span>
              <span>/ month</span>
            </h2>
          </div>
          <h2>Platinum Pack</h2>
          <p>All-inclusive access with VIP perks and personalized services.</p>
          <ul className="price-desc">
            <li>
              <img src="img/core-img/correct.png" alt="" /> All Explorer Pack
              features
            </li>
            <li>
              <img src="img/core-img/correct.png" alt="" /> Personalized travel
              planning
            </li>
            <li>
              <img src="img/core-img/correct.png" alt="" /> VIP travel events
            </li>
            <li>
              <img src="img/core-img/caution.png" alt="" /> Dedicated support
            </li>
            <li>
              <img src="img/core-img/correct.png" alt="" /> Annual travel gift
              box
            </li>
          </ul>
          <a href="#" className="btn pixel-btn">
            Subscribe
          </a>
        </div>
      </section>

      <section className="pixel-service-area mr-10">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="single-service-area text-center mb-100 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <img src={image6} alt="Hiking" />
                <h5>Guided Hikes</h5>
                <p>
                  Explore nature with our experienced guides on trails suitable
                  for all levels.
                </p>
                <a href="#" className="btn">
                  More Info
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="single-service-area text-center mb-100 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <img src={image6} alt="Hiking" />
                <h5>Forest Hikes</h5>
                <p>
                  Explore forest with our guides on trails suitable for all
                  levels.
                </p>
                <a href="#" className="btn">
                  More Info
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="single-service-area text-center mb-100 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <img src={image4} alt="Beach" />
                <h5>Beach Tours</h5>
                <p>
                  Enjoy pristine beaches and crystal-clear waters with our
                  exclusive beach tours.
                </p>
                <a href="#" className="btn">
                  More Info
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="single-service-area text-center mb-100 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <img src={image5} alt="Camping" />
                <h5>Camping Trips</h5>
                <p>
                  Experience the great outdoors with our well-planned camping
                  trips for all ages.
                </p>
                <a href="#" className="btn">
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
