import React, { useEffect, useState } from "react";
import HomeSVG from "../components/HomeSVG";
import HowSection from "../components/HowSection";
import "../css/Homepage.css";
import axios from "axios";
import { english, dutch } from "../content.js";
//import house from "../assests/svg/home2.svg";

function Homepage({ lang }) {
  return (
    <div>
      <div id="homepage">
        <div className="homepage-hero">
          <h1>{lang.homepage.hero}</h1>

          <button className="primary-button">
            <a href="#how-does-it-work">{lang.homepage.buttons[0]}</a>
          </button>
          <button className="transparent-button">
            <a href="#">{lang.homepage.buttons[1]}</a>
          </button>
        </div>
        <div className="svg">
          <HomeSVG />
          {/* <img src={house} /> */}
        </div>
      </div>
      <HowSection />
    </div>
  );
}

export default Homepage;
