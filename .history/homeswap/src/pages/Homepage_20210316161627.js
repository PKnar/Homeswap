import React, { useEffect, useState } from "react";
import HowSection from "../components/HowSection";
import "../css/Homepage.css";
import HomepageForm from "../components/HomepageForm";
import DotsSVG from "../components/DotsSVG";

function Homepage({ lang }) {
  window.addEventListener("scroll", (event) => {
    let scrollTop = document.documentElement.scrollTop;
  });

  return (
    <main>
      <header id="homepage">
        <DotsSVG />
        <div id="homepage-hero">
          <h1 className="hero-title">{lang.homepage.hero}</h1>
          <p className="hero-message">
            Here you will find advertisements from people who offer their rental
            property for exchange.
          </p>

          <button className="primary-button">
            <a style={{ color: "white" }} href="#how-does-it-work">
              {lang.homepage.buttons[0]}
            </a>
          </button>
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
