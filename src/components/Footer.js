import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content-container">
        <section className="fiber-section">
          <h3>Fiber</h3>
          <p>
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
          <p>Made with &#9829; in New Zealand</p>
        </section>
        <section className="sitemap-section">
          <h3>Sitemap</h3>
          <ul>
            <li>Homepage</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Features</li>
          </ul>
        </section>
        <section className="resources-section">
          <h3>Resources</h3>
          <ul>
            <li>Support</li>
            <Link to="/contact" className="contact-link">
              <li>Contact</li>
            </Link>
            <li>FAQ</li>
          </ul>
        </section>
        <section className="company-section">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Customers</li>
            <li>Blog</li>
          </ul>
        </section>
        <section className="portfolio-section">
          <h3>Portfolios</h3>
          <ul>
            <li>Sarah Andrews</li>
            <li>Mathew Higgins</li>
            <li>Janice Dave</li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
