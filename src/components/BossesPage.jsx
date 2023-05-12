import React, { useEffect, useState } from "react";

function BossesPage({ onRegionClick }) {
  const [bosses, setBosses] = useState([]);
  const [filteredBosses, setFilteredBosses] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
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
      setBosses(data.data);
    } catch (error) {
      console.error("Error fetching bosses:", error);
    }
  }

  return (
    <div>
      {/*       {bosses.length === 0 ? (
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
      )} */}
    </div>
  );
}

export default BossesPage;
