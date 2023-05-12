import React, { useEffect, useState } from "react";

function BossesPage({ onRegionClick }) {
  const [bosses, setBosses] = useState([]);
  const [filteredBosses, setFilteredBosses] = useState([]);

  console.log("onregionClick=", onRegionClick);

  function handleItemClick(bossRegion) {
    if (onRegionClick) {
      onRegionClick(bossRegion);
    }
  }

  useEffect(() => {
    fetchBosses();
  }, []);

  useEffect(() => {
    filterBossesByRegion();
  }, [onRegionClick]);

  async function fetchBosses() {
    try {
      const response = await fetch(
        "https://eldenring.fanapis.com/api/bosses?limit=106"
      );
      const data = await response.json();
      setBosses(data.data);
    } catch (error) {
      console.error("Error fetching bosses:", error);
    }
  }

  function filterBossesByRegion() {
    if (onRegionClick === "") {
      setFilteredBosses(bosses);
    } else {
      const filteredBosses = bosses.filter(
        (boss) => boss.region === onRegionClick
      );
      setFilteredBosses(filteredBosses);
      console.log("hello", setFilteredBosses(filteredBosses));
      console.log("hello2", filteredBosses);
      console.log("hello3", bosses);
    }
  }

  return (
    <div>
      {bosses.length === 0 ? (
        <p>Loading bosses...</p>
      ) : (
        <>
          <ul>
            {bosses.map((boss) => (
              <li key={boss.id} onClick={() => handleItemClick(boss.region)}>
                {boss.name} - {boss.region}
              </li>
            ))}
          </ul>
          {Array.isArray(filteredBosses) && (
            <ul>
              {filteredBosses.map((boss) => (
                <li key={boss.id}>
                  {boss.name} - {boss.region}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default BossesPage;
