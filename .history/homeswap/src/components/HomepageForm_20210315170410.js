import React from "react";
import HomeSVG from "./HomeSVG";
import "../css/homepageform.css";

function HomepageForm() {
  return (
    <div className="homepage-form">
      <h4> I want to move </h4>
      <form>
        <label>From:</label>
        <input type="text" placeholder="Enter your city" />
        <label> To:</label>
        <input type="text" placeholder=" Enter the city to want to move to" />
        <button>Find </button>
      </form>
      <HomeSVG />
    </div>
  );
}

export default HomepageForm;
