import React, { useState } from "react";
import { Link } from "gatsby";
import Hamburger from "../images/svg/hamburger-menu.svg";
import Close from "../images/svg/x.svg";

const MobileMenu = () => {
  const [showMenu, SetShowMenu] = useState(false);

  let menu;
  let menuBg;

  if (showMenu) {
    menu = (
      <div className="mobile-menu">
        <div className="mobile-menu-head">
          <h2>Fiber</h2>
          <Close onClick={() => SetShowMenu(false)} />
        </div>
        <ul className="mobile-ul">
          <li>
            <Link
              to="/#"
              className="mobile-li"
              onClick={() => SetShowMenu(false)}
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="mobile-li"
              onClick={() => SetShowMenu(false)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/#"
              className="mobile-li"
              onClick={() => SetShowMenu(false)}
            >
              Features
            </Link>
          </li>
        </ul>
      </div>
    );
    menuBg = (
      <div className="mobile-menu-bg" onClick={() => SetShowMenu(false)}></div>
    );
  }

  return (
    <div>
      <Hamburger className="hamburger" onClick={() => SetShowMenu(!showMenu)} />
      {menuBg}
      {menu}
    </div>
  );
};

export default MobileMenu;

// Use state to initial it to false - this will determine if the visible class is applied
// When the hamburger is clicked, then we run a function to update state in this component
