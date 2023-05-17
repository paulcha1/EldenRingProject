import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/BossesList.css";
import BottomFooter from "./BottomFooter";
import Header from "./Header";

function BossesPage({ onRegionClick }) {
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
      <Header />
      <div className="RegionBox">{region}</div>
      {bosses.length === 0 ? (
        <p>Loading bosses...</p>
      ) : (
        <>
          <ul className="AllBosses">
            {bosses.map((boss) => (
              <Link key={boss.id} to={`/BossesPage/${boss.region}/${boss.id}`}>
                <li
                  className="BossesList"
                  style={{
                    backgroundImage: `url(${boss.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  {boss.name}
                </li>
              </Link>
            ))}
          </ul>
        </>
      )}
      <BottomFooter />
    </div>
  );
}

export default BossesPage;
