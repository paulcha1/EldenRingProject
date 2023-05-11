import React from "react";
import { Link } from "react-router-dom";
import HeaderBG from "../assets/headertry.jpg";

function Header() {
  return (
    <header className="eldenHeader">
      <Link to="/">
        <img src={HeaderBG} alt="Homepage" />
      </Link>
    </header>
  );
}

export default Header;
