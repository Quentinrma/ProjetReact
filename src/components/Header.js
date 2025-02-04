import React from "react";
import MenuInteractions from "./MenuInteractions";
import Logo from "../images/logo QR.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <MenuInteractions></MenuInteractions>
      <header>
        <Link to="/">
          <img id="Logo" src={Logo} alt="logo-React" />
        </Link>
      </header>
    </div>
  );
}

export default Header;
