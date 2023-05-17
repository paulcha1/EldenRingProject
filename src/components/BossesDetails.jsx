import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./Header";

function BossesDetails() {
  const [bossesDetails, setBossesDetails] = useState(null);
  const { region, id } = useParams();
  console.log("paul ", region, id);

  function getBossesDetails() {
    axios
      .get(`https://eldenring.fanapis.com/api/bosses/${id}`)
      .then((response) => {
        setBossesDetails(response.data.data);
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getBossesDetails();
  }, [id]);

  if (!bossesDetails) {
    return <div>Loading Bosses Details...</div>;
  }

  const { image, name, description, location, drops } = bossesDetails;

  return (
    <div>
      bosse detail
      <Header />
      <div className="bossesDetails-container">
        <img src={image} alt={name} id="bossesImage" />
        <div className="bosses-details">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Location: {location}</p>
          <p>Drops: {drops}</p>
        </div>
      </div>
    </div>
  );
}

export default BossesDetails;
