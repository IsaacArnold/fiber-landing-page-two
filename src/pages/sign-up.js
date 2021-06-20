import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import HidePassword from "../images/svg/hide-password.svg";

import "../styles/normalize.css";
import "../styles/sign-up.scss";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setIsChecked(false);
  };

  return (
    <div className="sign-up-layout">
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
        meta={[
          {
            name: "description",
            content: "Sign-up to use the world's best portfolio builder.",
          },
        ]}
      >
        <meta charSet="utf-8" />
        <title>Sign-up to Fiber | Fiber</title>
        <link
          rel="canonical"
          href="https://pensive-dijkstra-b20c0b.netlify.app/sign-up"
        />
      </Helmet>
      <div className="grid-left">
        <h1>
          <Link to="/" className="link">
            Fiber
          </Link>
        </h1>
        <h2>Create your Fiber account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Your Name
            <input
              type="text"
              value={name}
              placeholder="John Doe"
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            E-mail
            <input
              type="text"
              value={email}
              placeholder="john@example.com"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="password">
            Password
            <input
              type={isRevealPwd ? "text" : "password"}
              value={password}
              placeholder="At least 8 characters"
              onChange={(e) => setPassword(e.target.value)}
              minLength="8"
              required={true}
              className="password-input"
            />
            <HidePassword
              className="password-svg"
              title={isRevealPwd ? "Hide password" : "Show password"}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={isChecked}
              required={true}
              onChange={() => setIsChecked((prevState) => !prevState)}
            />
            <p className="terms">
              By creating an account on Fiber, you agree to the{" "}
              <strong>Terms & Conditions.</strong>
            </p>
          </label>
          <button type="submit">Create Fiber Account</button>
        </form>
        <p className="sign-up-footer">
          Already have an account?{" "}
          <Link to="#" className="emph-footer">
            Sign in
          </Link>
        </p>
      </div>
      <div className="grid-right">
        <StaticImage
          src="../images/sign-up-image.png"
          alt="Example of porfolio template"
          className="grid-right-img"
          placeholder="blurred"
        />
        <h3>Unparalleled Templates</h3>
        <p>
          Crafted by a team of professional deisgners, our templates are
          unparalleled in the market.
        </p>
        <div className="circles">
          <div className="circle-one"></div>
          <div className="circle-two"></div>
          <div className="circle-three"></div>
          <div className="circle-four"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
