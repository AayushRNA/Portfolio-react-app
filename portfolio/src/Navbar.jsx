import React from "react";
import About from "./About";
import "./Navbar.css";
import Darkmode from "./Darkmode";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h2>My Portfolio</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>
            <Darkmode />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
