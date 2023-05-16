import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/BossesList.css";

function BossesPage({ onRegionClick }) {
  console.log("hello bosses page");
  const [bosses, setBosses] = useState([]);
  const [filteredBosses, setFilteredBosses] = useState([]);
  const { region } = useParams();
  const transformedRegion = region.split("-").join(" ");

  function handleItemClick(bossRegion) {
    if (onRegionClick) {
      onRegionClick(bossRegion);
    }
  }

  useEffect(() => {
    fetchBosses();
  }, []);

  async function fetchBosses() {
    try {
      const response = await fetch(
        "https://eldenring.fanapis.com/api/bosses?limit=106"
      );
      const data = await response.json();
      const bossesArray = data.data;
      const filteredBosses = bossesArray.filter(
        (boss) => boss.region === transformedRegion
      );

      setBosses(filteredBosses);
    } catch (error) {
      console.error("Error fetching bosses:", error);
    }
  }

  return (
    <div className="BossesContainer">
      <div>{region}</div>
      {bosses.length === 0 ? (
        <p>Loading bosses...</p>
      ) : (
        <>
          <ul>
            {bosses.map((boss) => (
              <Link to={`/BossesPage/${boss.region}/${boss.id}`}>
                <li className="BossesList" key={boss.id}>
                  {boss.name}
                </li>
              </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BossesPage;
