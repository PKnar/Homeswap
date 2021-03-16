import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeSVG from "../components/HomeSVG";
import HowSection from "../components/HowSection";
import "../css/Homepage.css";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SearchIcon from "@material-ui/icons/Search";
function Homepage({ lang }) {
  window.addEventListener("scroll", (event) => {
    let scrollTop = document.documentElement.scrollTop;
    let header = document.querySelector("#homepage");
    let section = document.querySelector("#how-does-it-work");
    let root = document.documentElement;
    if (scrollTop > 100) {
    } else {
      //header.style.animation = "removeborder 0.5s forwards ease-in-out";
    }
  });

  return (
    <main style={{ minHeight: "100%" }}>
      <header id="homepage">
        <div className="homepage-hero">
          <h1>{lang.homepage.hero}</h1>
          <p>
            Here you will find advertisements from people who offer their rental
            property for exchange. For example because of work, family expansion
            or for other reasons.
          </p>

          <div className="buttons">
            <button className="primary-button">
              <a style={{ color: "white" }} href="#how-does-it-work">
                {lang.homepage.buttons[0]}
              </a>
            </button>

            <button className="secondary-button">
              <Link
                style={{ color: " rgb(228, 105, 23)" }}
                className="transparent-button"
                to="/homes"
              >
                {lang.homepage.buttons[1]}
              </Link>
            </button>
          </div>
        </div>
        <div className="svg">
          <HomeSVG />
          {/* <img src={house} /> */}
        </div>
      </header>
      <HowSection />
    </main>
  );
}

export default Homepage;
