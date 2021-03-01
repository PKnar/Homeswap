import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeSVG from "../components/HomeSVG";
import HowSection from "../components/HowSection";
import "../css/Homepage.css";

function Homepage({ lang }) {
  return (
    <div>
      <div id="homepage">
        <div className="homepage-hero">
          <h1>{lang.homepage.hero}</h1>

          <button className="primary-button">
            <a href="#how-does-it-work">{lang.homepage.buttons[0]}</a>
          </button>

          <Link
            style={{ borderRadius: "5px" }}
            className="transparent-button"
            to="/homes"
          >
            {lang.homepage.buttons[1]}
          </Link>
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
