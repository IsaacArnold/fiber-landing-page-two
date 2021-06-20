import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/global.scss";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>404</h1>
      <p>Sorry, this page doesn't exist</p>
      <StaticImage
        src="../images/hero-Illustration.png"
        alt="Person wearing VR Glasses while looking at multimedia resources"
        className="notFound-img"
      />
      <Link to="/" className="notFound-btn">
        Return to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
