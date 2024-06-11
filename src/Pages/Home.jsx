import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.jpg";
import "../Styles/Home.css";
import "../Styles/bootstrap.min.css";
import { FaEye } from "react-icons/fa";
import WOW from "wowjs";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";

const slides = [
  {
    id: 1,
    image: img1,
    title: "Exploring Hidden Gems",
    year: "2021 Adventures",
    description:
      "Discover breathtaking landscapes and remote destinations. Embark on a journey of exploration and find hidden gems off the beaten path.",
    category: "visual",
  },
  {
    id: 2,
    image: img2,
    title: "Cultural Immersion",
    year: "Dive into Local Traditions",
    description:
      "Experience the vibrant cultures of distant lands. Immerse yourself in local customs, traditions, and festivals. Connect with communities and broaden your perspective.",
    category: "add",
  },
  {
    id: 3,
    image: img3,
    title: "Savoring Local Cuisine",
    year: "Taste the World",
    description:
      "Indulge in a culinary journey around the globe. Delight your taste buds with exotic flavors, traditional dishes, and mouthwatering delicacies from diverse cuisines.",
    category: "web",
  },
  {
    id: 4,
    image: img4,
    title: "Relaxation Retreats",
    year: "Find Your Zen",
    description:
      "Escape to serene retreats and tranquil havens. Rejuvenate your body and soul amidst nature's beauty. Unwind, recharge, and embrace the art of relaxation.",
    category: "web",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showImages, setShowImages] = useState(false);
  const [activeFilter, setActiveFilter] = useState("*");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const sections = document.querySelectorAll(
        ".hero-area, .top-catagory-area, .nl-area"
      );
      sections.forEach((section) => {
        if (scrollPosition > section.offsetTop) {
          section.classList.add("show");
        }
      });

      // For category images
      const categoryImages = document.querySelectorAll(".single-catagory");
      categoryImages.forEach((image) => {
        if (scrollPosition > image.offsetTop) {
          image.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger handleScroll once on component mount to check if any sections are already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const filteredSlides =
    activeFilter === "*"
      ? slides.slice(0, 3) // Limiting to the first three elements
      : slides.filter((slide) => slide.category === activeFilter);

  return (
    <>
      <Navbar />
      <div>
        <section className="hero-area">
          <div className="hero-slideshow">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`single-slide ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <div
                  className="slide-bg-img bg-img"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="col-12 col-lg-9">
                      <div className="welcome-text">
                        <h2>
                          <span>{slide.title}</span>
                          <br />
                          {slide.year}
                        </h2>
                        <h4>{slide.description}</h4>
                        <a href="#" className="btn pixel-btn mt-50">
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div
          className={`top-catagory-area d-flex flex-wrap ${
            showImages ? "show" : ""
          }`}
        >
          <div
            className="single-catagory bg-img d-flex align-items-center justify-content-center jarallax img3"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <a href="#">Agency</a>
          </div>
          <div
            className="single-catagory bg-img d-flex align-items-center justify-content-center jarallax img4"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <a href="#">What We Do?</a>
          </div>
        </div>

        <section className="nl-area section-padding-100-0">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-12 col-md-9">
                <div className="nl-form mb-100">
                  <h4>Stay in touch with us</h4>
                  <form action="#" method="post">
                    <input
                      type="email"
                      name="nl-email"
                      id="nlEmail"
                      placeholder="Email Address ..."
                    />
                    <button type="submit" className="d-none"></button>
                  </form>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="view-projects-btn text-right mb-100">
                  <a href="#" className="btn pixel-btn">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="pixel-portfolio-area section-padding-100-0"
          style={{ paddingBottom: "100px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="section-heading text-center wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <h2>Explore with Us</h2>
                  <img src="img/core-img/x.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="pixel-projects-menu wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="text-center portfolio-menu">
              <button
                className={`btn ${activeFilter === "*" ? "active" : ""}`}
                onClick={() => handleFilter("*")}
              >
                Nature
              </button>
              <button
                className={`btn ${activeFilter === "visual" ? "active" : ""}`}
                onClick={() => handleFilter("visual")}
              >
                Lakes
              </button>
              <button
                className={`btn ${activeFilter === "add" ? "active" : ""}`}
                onClick={() => handleFilter("add")}
              >
                Mountains
              </button>
              <button
                className={`btn ${activeFilter === "web" ? "active" : ""}`}
                onClick={() => handleFilter("web")}
              >
                Views
              </button>
            </div>
          </div>
          <div className="pixel-portfolio">
            {filteredSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`single_gallery_item wow fadeInUp`}
                data-wow-delay={`${index * 0.2}s`}
              >
                <img src={slide.image} alt="" />
                <div className="hover-content text-center d-flex align-items-center justify-content-center">
                  <div className="hover-text">
                    <a href="#" className="zoom-img">
                      <i className="fa fa-eye" aria-hidden="true">
                        <FaEye />
                      </i>
                    </a>
                    <h4>{slide.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "300px" }}>
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
