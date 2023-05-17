import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./HomepageStyle.css";
import "./BossesDetailsStyle.css";
import BottomFooter from "./BottomFooter";

function BossesDetails() {
  const [bossesDetails, setBossesDetails] = useState(null);
  const { region, id } = useParams();

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
      <BottomFooter />
    </div>
  );
}

export default BossesDetails;
