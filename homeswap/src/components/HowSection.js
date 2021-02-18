import React from "react";
import home1 from "../assests/svg/home.svg";
import home2 from "../assests/svg/home1.svg";
import home3 from "../assests/svg/home2.svg";

function HowSection() {
  return (
    <div id="how-does-it-work">
      <h1>How does it work?</h1>
      <div>
        <img src={home1} />
      </div>
      <div>
        <img src={home2} />
      </div>
      <div>
        <img src={home3} />
      </div>
    </div>
  );
}

export default HowSection;
