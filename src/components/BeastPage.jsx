import "../components/BossesList.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import BottomFooter from "../components/BottomFooter";

function BeastPage() {
  const [beasts, setBeasts] = useState([]);

  console.log("clgtry", beasts);

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
      <Header />
      <h1 className="BeastsBox">Beasts</h1>
      {beasts.length === 0 ? (
        <p>Loading Beasts...</p>
      ) : (
        <>
          <ul className="AllBeasts">
            {beasts.map((beast) => (
              <Link key={beast.id} to={`/BeastPage/${beast.id}`}>
                <li
                  className="BeastsList"
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
      <BottomFooter />
    </div>
  );
}

export default BeastPage;
