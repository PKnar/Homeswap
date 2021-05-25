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
    <section
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "6rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        {selectedHouse && (
          <Card
            userHouse={selectedHouse.userHouse}
            requestedHouse={selectedHouse.requestedHouse}
          />
        )}
      </div>
      {loggedUser && (
        <button
          onClick={(e) => handleRequest(e)}
          style={{
            backgroundColor: "rgb(122, 89, 18)",
            padding: "1rem 2rem",
            border: "none",
            color: "white",
          }}
        >
          Send swap request
        </button>
      )}
    </section>
  );
}

export default DetailsPage;
