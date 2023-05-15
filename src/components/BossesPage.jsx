import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BossesPage({ onRegionClick }) {
  const [bosses, setBosses] = useState([]);
  const [filteredBosses, setFilteredBosses] = useState([]);
  const { region } = useParams();
  const transformedRegion = region.split("-").join(" ");
  console.log(transformedRegion);
  console.log("onregionClick=", onRegionClick);

  function handleItemClick(bossRegion) {
    if (onRegionClick) {
      onRegionClick(bossRegion);
    }
  }

  useEffect(() => {
    fetchBosses();
  }, []);

  // useEffect(() => {
  //   filterBossesByRegion();
  // }, [onRegionClick]);

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
      console.log(filteredBosses);
      setBosses(filteredBosses);
    } catch (error) {
      console.error("Error fetching bosses:", error);
    }
  }

  // function filterBossesByRegion() {
  //   if (onRegionClick === "") {
  //     setFilteredBosses(bosses);
  //   } else {
  //     const filteredBosses = bosses.filter(
  //       (boss) => boss.region === onRegionClick
  //     );
  //     setFilteredBosses(filteredBosses);
  //     console.log("hello", setFilteredBosses(filteredBosses));
  //     console.log("hello2", filteredBosses);
  //     console.log("hello3", bosses);
  //   }
  // }

  return (
    <div>
      <div>{region}</div>
      {bosses.length === 0 ? (
        <p>Loading bosses...</p>
      ) : (
        <>
          <ul>
            {bosses.map((boss) => (
              <li key={boss.id} onClick={() => handleItemClick(boss.region)}>
                {boss.name}
              </li>
            ))}
          </ul>
          {Array.isArray(filteredBosses) && (
            <ul>
              {filteredBosses.map((boss) => (
                <li key={boss.id}>{boss.name}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default BossesPage;
