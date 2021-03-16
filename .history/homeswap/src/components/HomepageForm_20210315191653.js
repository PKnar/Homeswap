import React from "react";
import HomeSVG from "./HomeSVG";
import "../css/homepageform.css";
import { dutchCities } from "../cities.js";

function HomepageForm() {
  return (
    <div className="homepage-form">
      <div className="selection">
        <h2> I want to move </h2>
        <div>
          <label for="">From:</label>
          <select
            onChange={(e) =>
              this.setState((prevState) => ({
                userHouse: {
                  ...prevState.userHouse,
                  municipality: e.target.value,
                },
              }))
            }
            required
            name="municipality"
            id="municipality"
          >
            <option value="" disabled selected>
              Select your city
            </option>
            {dutchCities.map((city) => {
              return <option value={city.city}>{city.city}</option>;
            })}
          </select>
        </div>

        <label for="">To:</label>
        <select
          onChange={(e) =>
            this.setState((prevState) => ({
              requestedHouse: {
                ...prevState.requestedHouse,
                municipality: e.target.value,
              },
            }))
          }
          required
          name="municipality"
          id="municipality"
        >
          <option value="" disabled selected>
            Requested city
          </option>
          {dutchCities.map((city) => {
            return <option value={city.city}>{city.city}</option>;
          })}
        </select>
        <button
          style={{
            margin: "1rem",
            border: "2px solid rgb(228, 105, 23)",
            padding: "1rem",
            color: "rgb(228, 105, 23)",
          }}
        >
          Find
        </button>
      </div>
      <HomeSVG />
    </div>
  );
}

export default HomepageForm;
