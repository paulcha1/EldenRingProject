import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeastDetails() {
  const [beastDetails, setBeastDetails] = useState(null);
  const params = useParams();

  function getDetails() {
    axios
      .get(`https://eldenring.fanapis.com/api/creatures/${params.id}`)
      .then((response) => {
        setBeastDetails(response.data.data);
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getDetails();
  }, [params.id]);

  if (!beastDetails) {
    return <div>Loading Beasts Details...</div>;
  }

  const { image, name, description, location, drops } = beastDetails;

  return (
    <div className="bossesDetailAllPage">
      <Header />
      <div className="bossesDetails-container">
        <h2 className="bossName">{name}</h2>
        <img src={image} alt={name} id="bossesImage" />
        <div className="textDetails">
          <p className="description">{description}</p>
          <p>Location: {location}</p>
          <p>Loot: {drops}</p>
        </div>
      </div>
    </div>
  );
}

export default BeastDetails;
