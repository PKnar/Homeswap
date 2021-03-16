import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Navigation.css";
import { english, dutch } from "../content.js";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LanguageIcon from "@material-ui/icons/Language";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

function Navigation({ setLanguage, user, logout }) {
  let [lang, setLang] = useState(english);
  console.log(user);

  return (
    <nav>
      <h4>
        <Link to="/">HOMESWAP</Link>
      </h4>
      <div className="container">
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
            <Link to="/homes">Homes</Link>
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
          <li className="auth-icon" style={{ cursor: "pointer" }}>
            <PersonOutlineIcon />
            <ul className="mini-menu">
              <li>
                <Link to={user ? `/profile/${user._id}` : "/login"}>
                  {user ? "Profile" : "Login"}
                </Link>
              </li>
              <li>
                {user ? (
                  <a onClick={logout}>Logout</a>
                ) : (
                  <Link to="/signup">Register</Link>
                )}
              </li>
            </ul>
          </li>
          {/* {user ? (
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
            lang.authLinks.map((link) => {
              return (
                <li key={link.path}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })
          )} */}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
