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
    <main style={{ minHeight: "100%", position: "relative" }}>
      <header id="homepage">
        <div className="homepage-hero">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            style={{
              enableBackground: "new 0 0 50 50",
              position: "absolute",
              left: "0",
              width: "150px",
            }}
            space="preserve"
          >
            <circle class="st0" cx="12.3" cy="13.5" r="0.3" />
            <circle class="st0" cx="12.3" cy="15.6" r="0.3" />
            <circle class="st0" cx="12.3" cy="17.7" r="0.3" />
            <circle class="st0" cx="12.3" cy="19.9" r="0.3" />
            <circle class="st0" cx="12.3" cy="22" r="0.3" />
            <circle class="st0" cx="14.8" cy="13.5" r="0.3" />
            <circle class="st0" cx="17.3" cy="13.5" r="0.3" />
            <circle class="st0" cx="17.3" cy="15.6" r="0.3" />
            <circle class="st0" cx="17.3" cy="17.7" r="0.3" />
            <circle class="st0" cx="17.3" cy="19.9" r="0.3" />
            <circle class="st0" cx="17.3" cy="22" r="0.3" />
            <circle class="st0" cx="19.8" cy="13.5" r="0.3" />
            <circle class="st0" cx="19.8" cy="15.6" r="0.3" />
            <circle class="st0" cx="19.8" cy="17.7" r="0.3" />
            <circle class="st0" cx="19.8" cy="19.9" r="0.3" />
            <circle class="st0" cx="19.8" cy="22" r="0.3" />
            <circle class="st0" cx="14.8" cy="15.6" r="0.3" />
            <circle class="st0" cx="14.8" cy="17.7" r="0.3" />
            <circle class="st0" cx="14.8" cy="19.9" r="0.3" />
            <circle class="st0" cx="14.8" cy="22" r="0.3" />
          </svg>

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
