import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

import "../styles/normalize.css";
import "../styles/contact.scss";

const ContactFormPage = () => {
  return (
    <Layout>
      <Helmet></Helmet>
      <div className="content-container">
        <h1>Contact Us</h1>

        <form name="Contact Form" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="Contact Form" />
          <div className="form-section">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="John Doe"
              required={true}
            />
          </div>
          <div className="form-section">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@example.com"
              required={true}
            />
          </div>
          <div className="form-section">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here..."
              required={true}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactFormPage;
