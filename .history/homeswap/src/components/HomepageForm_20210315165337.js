import React from "react";
import HomeSVG from "./HomeSVG";

function HomepageForm() {
  return (
    <div>
      <h4> I want to move </h4>
      <form>
        <label>From:</label>
        <input type="text" placeholder="your city" />
      </form>
      <HomeSVG />
    </div>
  );
}

export default HomepageForm;
