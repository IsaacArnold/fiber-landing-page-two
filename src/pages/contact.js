import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

const ContactFormPage = () => {
  return (
    <Layout>
      <Helmet></Helmet>
      <h1>Contact</h1>

      <form name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label htmlFor="email">Your Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </Layout>
  );
};

export default ContactFormPage;
