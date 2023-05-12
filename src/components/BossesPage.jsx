import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function BossesPage() {
  const [bosses, setBosses] = useState([]);

  useEffect(() => {
    // Fetching the bosses from the API

    fetch("https://eldenring.fanapis.com/api/bosses?limit=106")
      .then((response) => response.json())
      .then((data) => setBosses(data))
      .catch((error) => {
        console.log("Error fetching bosses:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <h2>Region- BOSSES</h2>
      <ul>
        {bosses.map(
          boss(
            <li key={boss.id}>
              <link to={`/bosses/${boss.id}`}>{boss.name}</link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default BossesPage;
