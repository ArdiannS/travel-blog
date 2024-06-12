import React, { useEffect, useState } from "react";
import "../Styles/style.css";
import "../Styles/animate.css";
import WOW from "wowjs";
import axios from "axios";
function Contact() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://localhost:7198/api/Contact", formData)
      .then((response) => {
        console.log("Message sent successfully", response);
        // Clear the form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending message", error);
      });
  };
  return (
    <div>
      {" "}
      <section class="contact-area section-padding-100">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="section-heading text-center wow fadeInUp"
                data-wow-delay="100ms"
              >
                <img src="img/core-img/x.png" alt="" />
              </div>
            </div>
          </div>
          <h2 style={{ marginBottom: "40px" }}>Get In Touch</h2>
          <div class="row justify-content-center">
            <div class="col-12 col-lg-8">
              <div class="contact-form-area text-center">
                <form onSubmit={handleSubmit} action="#" method="post">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  <button type="submit" className="btn pixel-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
