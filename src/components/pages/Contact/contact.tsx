import React, { useState } from 'react';
import mapImage from '../../../assets/logos/map.png';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ name, email, phone, message });
  };

  return (
    <section id="contact" style={{ backgroundImage: `url(${mapImage})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="text-uppercase section-heading">Contact Us</h2>
            <h3 className="text-muted section-subheading">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      placeholder="Your Name *"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <small className="form-text text-danger flex-grow-1 lead"></small>
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      placeholder="Your Email *"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <small className="form-text text-danger lead"></small>
                  </div>
                  <div className="form-group mb-3">
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="Your Phone *"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <small className="form-text text-danger lead"></small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Your Message *"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <small className="form-text text-danger lead"></small>
                  </div>
                </div>
                <div className="w-100"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                    className="btn btn-primary btn-xl text-uppercase"
                    id="sendMessageButton"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
