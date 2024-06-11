import React, { useEffect } from "react";
 // Ensure this path is correct
import { FaStar, FaEnvelope, FaPhone } from "react-icons/fa";
import img from '../Assets/1.jpg';
import WOW from "wowjs";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Styles/animate.css'
import '../Styles/style.css'
const ContactUs = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <Navbar />
      <section
        className="breadcrumb-area bg-img bg-overlay jarallax"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="container-fluid h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcrumb-content">
                <h2>Contact</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4193.219928230633!2d21.14657460240988!3d42.653181311439866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ef3f69baacb%3A0xf864a269cc75e908!2sDukagjini%20Residence!5e0!3m2!1sen!2s!4v1718122343861!5m2!1sen!2s"
          allowFullScreen
          title="Google Maps"
          style={{ width: "100%", height: "100%", border: "0" }}
        ></iframe>
      </div>

      <section className="contact-area section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="contact-content mb-100">
                <div className="section-heading">
                  <h2>Where?</h2>
                  <h6>Our Address</h6>
                </div>

                <div className="single-contact-content d-flex">
                  <div className="icon">
                    <FaStar aria-hidden="true" />
                  </div>
                  <div className="text">
                    <h6>Address</h6>
                    <p>1530 Doverfield Ave <br /> Hacienda Heights, California(CA), 91745 </p>
                  </div>
                </div>

                <div className="single-contact-content d-flex">
                  <div className="icon">
                    <FaEnvelope />
                  </div>
                  <div className="text">
                    <h6>Email</h6>
                    <p>office@pixelagency.com <br /> johndoe@pixelagency.com</p>
                  </div>
                </div>

                <div className="single-contact-content d-flex">
                  <div className="icon">
                    <FaPhone />
                  </div>
                  <div className="text">
                    <h6>Phone</h6>
                    <p>+01 251 332 331 <br />+01 251 132 331</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="section-heading">
                <h2>Get In Touch</h2>
                <h6>Drop us a few lines</h6>
              </div>

              <div className="contact-form-area mb-100">
                <form action="#" method="post">
                  <input type="text" name="name" className="form-control" placeholder="Name" />
                  <input type="email" name="email" className="form-control" placeholder="E-mail" />
                  <input type="text" name="subject" className="form-control" placeholder="Subject" />
                  <textarea name="message" className="form-control" placeholder="Message"></textarea>
                  <button type="submit" className="btn pixel-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
