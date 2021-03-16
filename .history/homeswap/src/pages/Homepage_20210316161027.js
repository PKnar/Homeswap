import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeSVG from "../components/HomeSVG";
import HowSection from "../components/HowSection";
import "../css/Homepage.css";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SearchIcon from "@material-ui/icons/Search";
import HomepageForm from "../components/HomepageForm";
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
    <main>
      <header id="homepage">
        <div id="homepage-hero">
          <h1 className="title">{lang.homepage.hero}</h1>
          <p>
            Here you will find advertisements from people who offer their rental
            property for exchange.
          </p>

          <div className="buttons">
            <button className="primary-button">
              <a style={{ color: "white" }} href="#how-does-it-work">
                {lang.homepage.buttons[0]}
              </a>
            </button>
          </div>
        </div>
        <div className="svg">
          <HomepageForm />
        </div>
      </header>
      <HowSection />
    </main>
  );
}

export default Homepage;
