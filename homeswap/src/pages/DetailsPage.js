import React from "react";
import Card from "../components/Card";

function DetailsPage({ userHouse, requestedHouse }) {
  return (
    <div>
      <Card userHouse={userHouse} requestedHouse={requestedHouse} />
    </div>
  );
}

export default DetailsPage;
