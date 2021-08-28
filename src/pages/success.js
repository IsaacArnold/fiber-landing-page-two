import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

import "../styles/contact.scss";

const SuccessPage = () => {
  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <meta charSet="utf-8" />
        <title>Thank you for contacting us | Fiber</title>
        <meta
          name="description"
          content="Thank you for submitting your contact details"
        />
        <link
          rel="canonical"
          href="https://pensive-dijkstra-b20c0b.netlify.app/success"
        />
      </Helmet>
      <div className="content-container">
        <h1>Thank You!</h1>
        <p>
          Your form has been submitted and one of the team will be in touch
          soon.
        </p>
        <Link to="/" className="main-btn">
          Return to home page
        </Link>
      </div>
    </Layout>
  );
};

export default SuccessPage;
