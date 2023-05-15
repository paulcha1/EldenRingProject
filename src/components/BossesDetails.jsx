import React, { useParams, useEffect, useState } from "react";
import axios from "axios";

function BossesDetails() {
  const [bossesDetails, setBossesDetails] = useState(null);
  const params = useParams();

  function getBossesDetails() {
    axios
      .get(`https://eldenring.fanapis.com/api/bosses/${params.id}`)
      .then((response) => {
        setBossesDetails(response.data.data);
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    getBossesDetails();
  }, [params.id]);

  if (!bossesDetails) {
    return <div>Loading Bosses Details...</div>;
  }

  const { image, name, description, location, drops } = bossesDetails;

  return (
    <div>
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
