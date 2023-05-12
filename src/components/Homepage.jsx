import React from "react";
import "../App.css";
import BeastDetails from "../components/BeastDetails";
import BeastPage from "../components/BeastPage";
import Header from "../components/Header";
import BottomFooter from "../components/BottomFooter";
import { Link } from "react-router-dom";
import BossesPage from "./BossesPage";

function Homepage() {
  return (
    <>
      <div>
        <Header />

        <div className="home">
          <h2>The Lands Between</h2>
          <ul className="ul">
            <li>Limgrave</li>
            <li>Weeping Peninsula</li>
            <li>Liurnia of the Lakes</li>
            <li>Caelid</li>
            <li>DragonBarrow</li>
            <li>Altus Plateau</li>
            <li>Mount Gelmir</li>
            <li>Capital Outskirts</li>
            <li>Leyndell</li>
            <li>Mountaintops of the Giants</li>
            <li>Crumbling Farum Azula</li>
            <li>Forbidden Lands</li>
            <li>Consecrated Snowfield</li>
            <li>Miquella's Haligtree</li>
            <li>Others</li>
          </ul>
          <BeastPage></BeastPage>
          <BottomFooter></BottomFooter>
        </div>
      </div>
    </>
  );
}

export default Homepage;
