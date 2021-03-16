import React from "react";
import HomeSVG from "./HomeSVG";
import "../css/homepageform.css";
import { dutchCities } from "../cities.js";

function HomepageForm() {
  return (
    <div className="homepage-form">
      <h4> I want to move </h4>
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
          Select your municipality
        </option>
        {dutchCities.map((city) => {
          return <option value={city.city}>{city.city}</option>;
        })}
      </select>

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
          Requested municipality
        </option>
        {dutchCities.map((city) => {
          return <option value={city.city}>{city.city}</option>;
        })}
      </select>
      <button>Find</button>
      <HomeSVG />
    </div>
  );
}

export default HomepageForm;
