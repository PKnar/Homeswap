import React from "react";
import Card from "../components/Card";
import axios from "axios";

function DetailsPage({ selectedHouse }) {
  let loggedUser = JSON.parse(localStorage.getItem("user"));

  const handleRequest = async (e) => {
    e.preventDefault();
    let { user } = selectedHouse;
    let res = await axios.post("/api/users/notifications", {
      user,
      loggedUser: loggedUser._id,
    });
    console.log(res);
  };
  return (
    <div style={{ display: "flex", height: "100vh" ,  justifyContent: "center" }}}>
      {selectedHouse && (
        <Card
          userHouse={selectedHouse.userHouse}
          requestedHouse={selectedHouse.requestedHouse}
        />
      )}
      {loggedUser && (
        <button
          onClick={(e) => handleRequest(e)}
          style={{ backgroundColor: "green", padding: "3rem" }}
        >
          Send swap request
        </button>
      )}
    </div>
  );
}

export default DetailsPage;
