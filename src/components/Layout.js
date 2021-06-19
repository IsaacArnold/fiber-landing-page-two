import React from "react";
import Footer from "../components/Footer";
import Navbar from "./Navbar";

import "../styles/normalize.css";
import "../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
