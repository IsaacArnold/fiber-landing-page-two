import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Checkmark from "../images/svg/checkmark.svg";
import Star from "../images/svg/star.svg";

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="content-container">
        <div className="header-grid">
          <StaticImage
            src="../../images/hero-illustration.png"
            alt="Person using multimedia while wearing VR Glasses"
            className="header-img"
            placeholder="blurred"
          />
          <div className="header-grid-content">
            <div className="rating">
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <p>Rated 4.8/5 (243 reviews)</p>
            </div>
            <h1>Create your portfolio in minutes.</h1>
            <p>
              With Fiber, you can setup your own personal portfolio in minutes
              with dozens of premade, beautiful templates.
            </p>
            <div className="header-btns">
              <Link to="/sign-up" className="main-btn">
                Start Free Trial
              </Link>
              <Link to="/#portfolios" className="secondary-btn">
                View Examples
              </Link>
            </div>
            <div className="checkmark-section">
              <div className="checkmark-div">
                <Checkmark className="checkmark" />
                <p>No Credit Card Required</p>
              </div>
              <div className="checkmark-div">
                <Checkmark className="checkmark" />
                <p>10 Free Templates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
