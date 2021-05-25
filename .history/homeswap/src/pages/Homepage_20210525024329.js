import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeSVG from "../components/HomeSVG";
import HowSection from "../components/HowSection";
import "../css/Homepage.css";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SearchIcon from "@material-ui/icons/Search";
import HomepageForm from "../components/HomepageForm";
import DotsSVG from "../components/DotsSVG";
import { ArrowRight } from "@material-ui/icons";
import { dutchCities } from "../cities.js";

import home from "../assests/svg/bg.jpg";

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
        {/* <DotsSVG /> */}
        <div className="flex">
          <div id="homepage-hero">
            <h1 className="hero-title">
              Exchange Your <br />
              <span className="primary-color"> Rental</span> House
            </h1>
            <p className="hero-message">
              Here you will find advertisements from people who offer their
              rental property for exchange.
            </p>
            <form>
              <select>
                <option value="" disabled selected>
                  Select your city
                </option>
                {dutchCities.map((city) => {
                  return <option value={city.city}>{city.city}</option>;
                })}
              </select>
              <select>
                <option value="" disabled selected>
                  Select where you want to move
                </option>
                {dutchCities.map((city) => {
                  return <option value={city.city}>{city.city}</option>;
                })}
              </select>
              <button id="find">
                {" "}
                <Link>View Rentals</Link>
              </button>
            </form>
            {/* <button className="primary-button">
            <a href="#how-does-it-work">{lang.homepage.buttons[0]}</a>
          </button> */}
            {/* <ArrowRight /> How does it work?{" "} */}
          </div>
        </div>
        <div className="image-container">
          <div
            className="bg-image"
            style={{
              backgroundImage: `url(${home})`,
            }}
          ></div>
        </div>
        {/* <div id="homepage-form">
          <HomepageForm />
        </div> */}{" "}
      </header>
      <HowSection />
      <section id="statistics">
        <h2>Statistics</h2>
        <div className="wrapper">
          <div className="transparent-card">
            {" "}
            <h3>20396</h3>
            <p>Total number of ads</p>
          </div>
          <div className="transparent-card">
            {" "}
            <h3>21929</h3>
            <p>Families have found their exchange partner through this site</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Homepage;
