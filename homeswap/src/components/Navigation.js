import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Navigation.css";
import { english, dutch } from "../content.js";
import LanguageIcon from "@material-ui/icons/Language";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

function Navigation({ setLanguage, user, logout }) {
  let [lang, setLang] = useState(english);

  window.addEventListener("scroll", (event) => {
    let scrollTop = document.documentElement.scrollTop;
    let nav = document.querySelector("#navigation");

    if (scrollTop > 100) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  let handleMobileNavClick = (e) => {
    let mobile_nav = document.querySelector(".mobile-nav");
    let topLine = document.querySelector(".top-line");
    let middleLine = document.querySelector(".middle-line");
    let bottomLine = document.querySelector(".bottom-line");

    topLine.classList.toggle("deg45");
    middleLine.classList.toggle("deg-45");
    bottomLine.classList.toggle("transparent");

    mobile_nav.classList.toggle("show");
    mobile_nav.classList.toggle("animate");
  };

  return (
    <nav id="navigation">
      <Link id="logo" style={{ color: "black" }} to="/">
        HOMESWAP
      </Link>

      <div className="container  desktop-nav-wrapper">
        {/*  <div>
          <a
            onClick={(e) => {
              setLang(english);
              setLanguage(english);
            }}
            href="#"
          >
            EN
          </a>{" "}
          |
          <a
            onClick={(e) => {
              setLang(dutch);
              setLanguage(dutch);
            }}
            href="#"
          >
            NL
          </a>
        </div> */}
        <ul className="desktop-nav">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/homes">Rentals</Link>
          </li>

          {user && (
            <li
              style={{
                position: "relative",
              }}
            >
              <NotificationsNoneIcon />
              {user.notifications.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    border: "2px solid transparent",
                    borderRadius: "100%",
                    backgroundColor: "red",
                    width: "10px",
                    height: "10px",
                  }}
                ></div>
              )}
            </li>
          )}

          {user ? (
            <>
              <li>
                <Link to={`/profile/${user._id}`}>Profile</Link>
              </li>
              <li>
                {" "}
                <a onClick={logout}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/login">Login</Link>
              </li>
              <li className="get-started">
                {" "}
                <Link to="/signup">Get Started</Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="mobile-nav-container">
        <div className="burger-menu" onClick={(e) => handleMobileNavClick(e)}>
          <div className="line top-line "></div>
          <div className="line middle-line "></div>
          <div className="line bottom-line  "></div>
        </div>
        <ul className="mobile-nav close">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/homes">Rentals</Link>
          </li>

          {user && (
            <li
              style={{
                position: "relative",
              }}
            >
              <NotificationsNoneIcon />
              {user.notifications.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    border: "2px solid transparent",
                    borderRadius: "100%",
                    backgroundColor: "red",
                    width: "10px",
                    height: "10px",
                  }}
                ></div>
              )}
            </li>
          )}

          {user ? (
            <>
              <li>
                <Link to={`/profile/${user._id}`}>Profile</Link>
              </li>
              <li>
                {" "}
                <a onClick={logout}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/login">Login</Link>
              </li>
              <li className="get-started">
                {" "}
                <Link to="/signup">Get Started</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
