import React, { useState, useEffect } from "react";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.jpg";
import "../Styles/Home.css";

const slides = [
  {
    id: 1,
    image: img1,
    title: "Exploring Hidden Gems",
    year: "2021 Adventures",
    description:
      "Discover breathtaking landscapes and remote destinations. Embark on a journey of exploration and find hidden gems off the beaten path.",
  },
  {
    id: 2,
    image: img2,
    title: "Cultural Immersion",
    year: "Dive into Local Traditions",
    description:
      "Experience the vibrant cultures of distant lands. Immerse yourself in local customs, traditions, and festivals. Connect with communities and broaden your perspective.",
  },
  {
    id: 3,
    image: img3,
    title: "Savoring Local Cuisine",
    year: "Taste the World",
    description:
      "Indulge in a culinary journey around the globe. Delight your taste buds with exotic flavors, traditional dishes, and mouthwatering delicacies from diverse cuisines.",
  },
  {
    id: 4,
    image: img4,
    title: "Relaxation Retreats",
    year: "Find Your Zen",
    description:
      "Escape to serene retreats and tranquil havens. Rejuvenate your body and soul amidst nature's beauty. Unwind, recharge, and embrace the art of relaxation.",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
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
                      Take a look
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
