import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/signup",
    name: "Sign up",
  },
  {
    path: "/login",
    name: "Login",
  },
];

function Navigation() {
  return (
    <nav>
      <h4>HOMESWAP</h4>
      <ul>
        {links.map((link) => {
          return (
            <li>
              <Link to={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
