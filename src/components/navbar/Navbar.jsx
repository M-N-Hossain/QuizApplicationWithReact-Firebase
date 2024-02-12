import React from "react";

// internal import
import "../../styles/navbar.css";
import Account from "./Account";
import logo from "../../assets/images/logo-bg.png";

export default function () {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="index.html" className="brand">
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}