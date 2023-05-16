import React from "react";
import { Link } from "react-router-dom";
import HeaderBG from "/public/assets/eldenring_new.png";
import "../App.css";

function Header() {
  return (
    <header className="eldenHeader">
      <Link to="/">
        <img src={HeaderBG} alt="Elden-Ring-header-image " />
      </Link>
    </header>
  );
}

export default Header;
