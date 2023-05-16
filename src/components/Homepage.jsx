import React from "react";
import "./HomepageStyle.css";
import BeastDetails from "../components/BeastDetails";
import BeastPage from "../components/BeastPage";
import Header from "../components/Header";
import BottomFooter from "../components/BottomFooter";
import { Link } from "react-router-dom";
import { useState } from "react";

function Homepage({ handleRegionClick }) {
  return (
    <>
      <div>
        <Header />
        <div className="home">
          <ul className="ul">
            <li id="Limgrave" onClick={() => handleRegionClick("Limgrave")}>
              <Link className="liurnaCard" to="/BossesPage/Limgrave">
                Limgrave
              </Link>
            </li>
            <li
              id="Weeping-Peninsula"
              onClick={() => handleRegionClick("Weeping Peninsula")}
            >
              <Link className="liurnaCard" to="/BossesPage/Weeping-Peninsula">
                Weeping Peninsula
              </Link>
            </li>
            <li
              id="Liurnia-of-the-Lakes"
              onClick={() => handleRegionClick("Liurnia of the Lakes")}
            >
              <Link
                className="liurnaCard"
                to="/BossesPage/Liurnia-of-the-Lakes"
              >
                Liurnia of the Lakes
              </Link>
            </li>
            <li id="Caelid" onClick={() => handleRegionClick("Caelid")}>
              <Link className="liurnaCard" to="/BossesPage/Caelid">
                Caelid
              </Link>
            </li>
            <li
              id="Dragonbarrow"
              onClick={() => handleRegionClick("Dragonbarrow")}
            >
              <Link className="liurnaCard" to="/BossesPage/Dragonbarrow">
                Dragonbarrow
              </Link>
            </li>
            <li
              id="Altus-Plateau"
              onClick={() => handleRegionClick("Altus Plateau")}
            >
              <Link className="liurnaCard" to="/BossesPage/Altus-Plateau">
                Altus Plateau
              </Link>
            </li>
            <li
              id="Mount-Gelmir"
              onClick={() => handleRegionClick("Mount Gelmir")}
            >
              <Link className="liurnaCard" to="/BossesPage/Mount-Gelmir">
                Mount Gelmir
              </Link>
            </li>

            <li
              id="Mountaintops-of-the-Giants"
              onClick={() => handleRegionClick("Mountaintops of the Giants")}
            >
              <Link
                className="liurnaCard"
                to="/BossesPage/Mountaintops-of-the-Giants"
              >
                Mountaintops of the Giants
              </Link>
            </li>

            <li
              id="Consecrated-Snowfield"
              onClick={() => handleRegionClick("Consecrated Snowfield")}
            >
              <Link
                className="liurnaCard"
                to="/BossesPage/Consecrated-Snowfield"
              >
                Consecrated Snowfield
              </Link>
            </li>
          </ul>
          <div id="goToBeastpage">
            <Link id="linktobeastpage" to="/BeastPage">
              Bestiary
            </Link>
          </div>
          <BottomFooter />
        </div>
      </div>
    </>
  );
}

export default Homepage;
