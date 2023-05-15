import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeastDetails() {
  const [beastDetails, setBeastDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://eldenring.fanapis.com/api/creatures/:creature_id/${params.id}`
      )
      .then((response) => {
        setBeastDetails(response.data);
      })
      .catch((e) => console.log(e));
  }, [params.id]);

  if (!beastDetails) {
    return <div>Loading Beasts Details...</div>;
  }

  const { Image_url, Name, Description, Location, Drops } = beastDetails;

  return (
    <div>
      <Header />
      <div className="beastDetails-container">
        <img src={Image_url} alt={Name} id="beastImage" />

        <div className="beast-details">
          <h2>{Name}</h2>
          <p>{Description}</p>
          <p>Location: {Location}</p>
          <p>Drops: {Drops}</p>
        </div>
      </div>
    </div>
  );
}

export default BeastDetails;
