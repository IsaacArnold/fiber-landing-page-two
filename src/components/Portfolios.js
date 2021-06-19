import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Portfolios = () => {
  return (
    <section className="portfolios" id="portfolios">
      <div className="content-container">
        <div className="port-card">
          <StaticImage
            src="../images/svg/user-avatar.svg"
            atl="Profile image of Sarah Andrews"
            className="user-img"
            placeholder="blurred"
          />
          <div className="user-info">
            <p className="name">Sarah Andrews</p>
            <p className="revenue">$100k in revenue</p>
          </div>
          <p className="user-content">
            Setting up my portfolio with Fiber too no more than 10 minutes.
            Since then, my portfolio has attracted a lot of clients and made me
            more than $100k.
          </p>
          <Link to="/#" className="user-btn">
            View Sarah's Portfolio
          </Link>
        </div>
        <div className="port-card">
          <StaticImage
            src="../images/svg/user-avatar-2.svg"
            atl="Profile image of Mathew Higgins"
            className="user-img"
            placeholder="blurred"
          />
          <div className="user-info">
            <p className="name">Mathew Higgins</p>
            <p className="revenue">$20k in revenue</p>
          </div>
          <p className="user-content">
            I have been getting A LOT of leads ever since I used Fiber's premade
            templates, now I just need to work on my case studies and I'll be
            ready to go!
          </p>
          <Link to="/#" className="user-btn">
            View Mathew's Portfolio
          </Link>
        </div>
        <div className="port-card">
          <StaticImage
            src="../images/svg/user-avatar-32.svg"
            atl="Profile image of Janice Dave"
            className="user-img"
            placeholder="blurred"
          />
          <div className="user-info">
            <p className="name">Janice Dave</p>
            <p className="revenue">$30k in revenue</p>
          </div>
          <p className="user-content">
            I only just started freelancing this year and I have already made
            more than I ever made in my full-time job. The templates are just so
            amazing.
          </p>
          <Link to="/#" className="user-btn">
            View Janice's Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
