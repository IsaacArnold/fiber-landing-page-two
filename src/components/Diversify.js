import React from "react";
import { Link } from "gatsby";

const Diversify = () => {
  return (
    <section className="diversify">
      <div className="content-container">
        <div className="diversify-grid">
          <div className="diversify-grid-content">
            <h2>Diversify your portfolio.</h2>
            <p>
              Create an even more impressive portfolio by creating case studies
              for your projects. Simply follow our step-by-step guide.
            </p>
            <Link to="/sign-up" className="diversify-btn">
              Start Free Trial
            </Link>
          </div>
          <div className="page-image-two"></div>
        </div>
      </div>
    </section>
  );
};

export default Diversify;
