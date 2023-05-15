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
        console.log(response);
        setBeastDetails(response.data.data);
        console.log(beastDetails);
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
    <div>
      <Header />
      <div className="beastDetails-container">
        <img src={image} alt={name} id="beastImage" />
        {console.log("paul", image)}
        <div className="beast-details">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Location: {location}</p>
          <p>Drops: {drops}</p>
        </div>
      </div>
    </div>
  );
}

export default BeastDetails;
