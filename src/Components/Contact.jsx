import React, { useEffect } from "react";
import "../Styles/style.css";
import "../Styles/animate.css";
import WOW from "wowjs";

function Contact() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <section class="contact-area section-padding-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div
              class="section-heading text-center wow fadeInUp"
              data-wow-delay="100ms"
            >
              <h2>Get In Touch</h2>
              <img src="img/core-img/x.png" alt="" />
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="contact-form-area text-center">
              <form action="#" method="post">
                <input
                  type="text"
                  name="name"
                  class="form-control wow fadeInUp"
                  data-wow-delay="100ms"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  class="form-control wow fadeInUp"
                  data-wow-delay="300ms"
                  placeholder="E-mail"
                />
                <input
                  type="text"
                  name="subject"
                  class="form-control wow fadeInUp"
                  data-wow-delay="500ms"
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  class="form-control wow fadeInUp"
                  data-wow-delay="700ms"
                  placeholder="Message"
                ></textarea>
                <button
                  type="submit"
                  class="btn pixel-btn wow fadeInUp"
                  data-wow-delay="900ms"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
