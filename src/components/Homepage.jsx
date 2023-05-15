import React from "react";
import "../App.css";
import BeastDetails from "../components/BeastDetails";
import BeastPage from "../components/BeastPage";
import Header from "../components/Header";
import BottomFooter from "../components/BottomFooter";
import { Link } from "react-router-dom";
import BossesPage from "./BossesPage";
import { useState } from "react";

function Homepage({ handleRegionClick }) {
  return (
    <>
      <div>
        <Header />

        <div className="home">
          <h2>The Lands Between</h2>
          <ul className="ul">
            <li onClick={() => handleRegionClick("Limgrave")}>
              <Link to="/BossesPage/Limgrave">Limgrave</Link>
            </li>
            <li onClick={() => handleRegionClick("Weeping Peninsula")}>
              <Link to="/BossesPage/Weeping-Peninsula">Weeping Peninsula</Link>
            </li>
            <li onClick={() => handleRegionClick("Liurnia of the Lakes")}>
              <Link to="/BossesPage/Liurnia-of-the-Lakes">
                Liurnia of the Lakes
              </Link>
            </li>
            <li onClick={() => handleRegionClick("Caelid")}>
              <Link to="/BossesPage/Caelid">Caelid</Link>
            </li>
            <li onClick={() => handleRegionClick("Dragonbarrow")}>
              <Link to="/BossesPage/Dragonbarrow">Dragonbarrow</Link>
            </li>
            <li onClick={() => handleRegionClick("Altus Plateau")}>
              <Link to="/BossesPage/Altus-Plateau">Altus Plateau</Link>
            </li>
            <li onClick={() => handleRegionClick("Mount Gelmir")}>
              <Link to="/BossesPage/Mount-Gelmir">Mount Gelmir</Link>
            </li>
            <li onClick={() => handleRegionClick("Capital Outskirts")}>
              <Link to="/BossesPage/Capital-Outskirts">Capital Outskirts</Link>
            </li>

            <li onClick={() => handleRegionClick("Mountaintops of the Giants")}>
              <Link to="/BossesPage/Mountaintops-of-the-Giants">
                Mountaintops of the Giants
              </Link>
            </li>

            <li onClick={() => handleRegionClick("Consecrated Snowfield")}>
              <Link to="/BossesPage/Consecrated-Snowfield">
                Consecrated Snowfield
              </Link>
            </li>
          </ul>
          <div>
            <Link to="/BeastPage">Beast Page</Link>
          </div>
          <BottomFooter />
        </div>
      </div>
    </>
  );
}

export default Homepage;
