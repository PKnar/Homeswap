import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";
import { english, dutch } from "../content.js";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userAction";
import { useHistory } from "react-router-dom";

function Navigation({ setLanguage }) {
  let [lang, setLang] = useState(english);
  const history = useHistory();

  let userLogin = useSelector((state) => state.userLogin);
  let dispatch = useDispatch();
  let { userInfo } = userLogin;

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <nav>
      <h4>
        <Link to="/">HOMESWAP</Link>
      </h4>
      <div className="container">
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
        <ul className="desktop-">
          <li>
            <Link to="/">Home</Link>
          </li>
          {userInfo ? (
            <>
              <li>
                <Link to={`profile/${userInfo._id}`}>Profile</Link>
              </li>
              <li>
                {" "}
                <a onClick={handleLogout}>Logout</a>
              </li>
            </>
          ) : (
            lang.authLinks.map((link) => {
              return (
                <li>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
