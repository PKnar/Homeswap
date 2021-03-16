import React from "react";
import HomeSVG from "./HomeSVG";

function HomepageForm() {
  return (
    <div>
      <h4> I want to move </h4>
      <form>
        <label>From:</label>
        <input type="text" placeholder="Enter your city" />
        <label> To:</label>
        <input type="text" placeholder=" Enter the city to want to move to" />
        <button>Find </button>
        <HomeSVG />
      </form>
    </div>
  );
}

export default HomepageForm;
