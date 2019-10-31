import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <a href="/" className="nav--brand">
          {/* <img src={require("../images/logo.svg")} alt="" srcset="" /> */}
          Shortly
        </a>
        <div className="nav__container">
          <div className="nav__left">
            <a href="#0">Features</a>
            <a href="#0">Pricing</a>
            <a href="#0">Resources</a>
          </div>
          <div className="nav__right">
            <a href="#0">Login</a>
            <a href="#0" className="nav__btn--cta">
              Signup
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
