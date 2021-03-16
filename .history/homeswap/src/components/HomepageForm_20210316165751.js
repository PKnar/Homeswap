import React from "react";
import HomeSVG from "./HomeSVG";
import { Link } from "react-router-dom";
import "../css/homepageform.css";
import { dutchCities } from "../cities.js";

function HomepageForm() {
  return (
    <div className="form-container">
      <h2> I want to move </h2>
      <div className="selection">
        <label for="">From</label>
        <select required name="municipality" id="municipality">
          <option value="" disabled selected>
            Select your city
          </option>
          {dutchCities.map((city) => {
            return <option value={city.city}>{city.city}</option>;
          })}
        </select>
        <label for="">To</label>
        <select required name="municipality" id="municipality">
          <option value="" disabled selected>
            Requested city
          </option>
          {dutchCities.map((city) => {
            return <option value={city.city}>{city.city}</option>;
          })}
        </select>{" "}
        <Link to="/homes">FIND A HOUSE</Link>
      </div>
      <HomeSVG />
    </div>
  );
}

export default HomepageForm;
