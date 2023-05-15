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
            <li onClick={() => handleRegionClick("DragonBarrow")}>
              <Link to="/BossesPage/DragonBarrow">DragonBarrow</Link>
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
            <li onClick={() => handleRegionClick("Leyndell")}>
              <Link to="/BossesPage/Leyndell">Leyndell</Link>
            </li>
            <li onClick={() => handleRegionClick("Mountaintops of the Giants")}>
              <Link to="/BossesPage/Mountaintops-of-the-Giants">
                Mountaintops of the Giants
              </Link>
            </li>
            <li onClick={() => handleRegionClick("Crumbling Farum Azula")}>
              <Link to="/BossesPage/Crumbling-Farum-Azula">
                Crumbling Farum Azula
              </Link>
            </li>
            <li onClick={() => handleRegionClick("Forbidden Lands")}>
              <Link to="/BossesPage/Forbidden-Lands">Forbidden Lands</Link>
            </li>
            <li onClick={() => handleRegionClick("Consecrated Snowfield")}>
              <Link to="/BossesPage/Consecrated-Snowfield">
                Consecrated Snowfield
              </Link>
            </li>
            <li onClick={() => handleRegionClick("Miquella's Haligtree")}>
              <Link to="/BossesPage/Miquella's-Haligtree">
                Miquella's Haligtree
              </Link>
            </li>
          </ul>
          <BeastPage />
          <BottomFooter />
        </div>
      </div>
    </>
  );
}

export default Homepage;
