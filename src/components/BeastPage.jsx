import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import "../components/BossesList.css";

function BeastPage() {
  const [beasts, setBeasts] = useState([]);

  console.log(beasts);

  useEffect(() => {
    fetchBeasts();
  }, []);

  async function fetchBeasts() {
    try {
      const response = await fetch(
        "https://eldenring.fanapis.com/api/creatures?limit=100"
      );
      const data = await response.json();
      setBeasts(data.data);
      console.log("paul", beasts);
    } catch (error) {
      console.error("Error fetching beasts:", error);
    }
  }

  return (
    <div>
      <div className="BeastsBox">Beasts</div>
      <div className="BeastsList"></div>
      <div className="BeastsContainer"></div>
      {beasts.length === 0 ? (
        <p>Loading Beasts...</p>
      ) : (
        <>
          <ul className="AllBeasts">
            {beasts.map((beast) => (
              <Link to={`/BeastPage/${beast.id}`}>
                <li
                  className="BeastsList"
                  key={beast.id}
                  style={{
                    backgroundImage: `url(${beast.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  {beast.name}
                </li>
              </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default BeastPage;
