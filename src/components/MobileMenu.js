import React, { useState } from "react";
import Hamburger from "../images/svg/hamburger-menu.svg";

const MobileMenu = () => {
  const [showMenu, SetShowMenu] = useState(false);

  let menu;
  let menuBg;

  if (showMenu) {
    menu = (
      <div className="mobile-menu">
        <h2 onClick={() => SetShowMenu(false)}>Fiber</h2>
        <ul className="mobile-ul">
          <li onClick={() => SetShowMenu(false)}>Community</li>
          <li onClick={() => SetShowMenu(false)}>Pricing</li>
          <li onClick={() => SetShowMenu(false)}>Features</li>
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
