import React from "react";
import home1 from "../assests/svg/home.svg";
import home2 from "../assests/svg/home1.svg";
import home3 from "../assests/svg/home2.svg";
import "../css/Homepage.css";

function HowSection() {
  return (
    <div id="how-does-it-work">
      <h2>How does it work?</h2>

      <div className="container">
        <div className="card" style={{
          backgroundImage=`url(${home1})`
        }}>
          <p>Post your home</p>
          
        </div>
        <div className="card">
          <p>Share where you want to move</p>
          <img src={home2} />
        </div>
        <div className="card">
          <p> Match the requests and exchange the places </p>
          <img src={home3} />
        </div>
      </div>
    </div>
  );
}

export default HowSection;
