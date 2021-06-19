import React from "react";
import Time from "../images/svg/time.svg";
import Code from "../images/svg/code.svg";
import AllSizes from "../images/svg/allSizes.svg";

const WhyFiber = () => {
  return (
    <section className="why-fiber">
      <div className="content-container">
        <header>
          <h4>Why Fiber?</h4>
          <h2>A good portfolio means good employability.</h2>
        </header>
        <div className="features">
          <div className="features-section">
            <Time />
            <p className="features-heading">Build in minutes</p>
            <p className="features-content">
              With a selection of premade templates, you can build out a
              portfolio in less than 10 minutes.
            </p>
          </div>
          <div className="features-section">
            <Code />
            <p className="features-heading">Add custom CSS</p>
            <p className="features-content">
              Customize your personal portfolio even more with the ability to
              add your own custom CSS styles.
            </p>
          </div>
          <div className="features-section">
            <AllSizes />
            <p className="features-heading">Responsive</p>
            <p className="features-content">
              All Fiber templates are fully responsive to ensure the experience
              is seemless across all devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFiber;
