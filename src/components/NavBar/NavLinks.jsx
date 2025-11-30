import React from "react";
import "./css/NavLinks.css";

const NavLinks = () => {
  return (
    <>
      <nav className="nav-links">
        <div className="nav-links-left">
          <button className="exclusive-btn">Exclusive</button>
        </div>
        <div className="nav-links-right">
          <button className="home-btm">Home</button>
          <button className="contact-btn">Contact</button>
          <button className="about-btn">About</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>
    </>
  );
};

export default NavLinks;
