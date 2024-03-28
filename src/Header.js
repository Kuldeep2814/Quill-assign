import React from "react";
import "./Header.css";
import logo from "./assets/logo.png";
import dropdown from "./assets/dropdown.png";

const Header = () => {
  return (
    <div className="header" style={{ background: "#10286B" }}>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="links">
          <a href="/services">Services</a>
          <img src={dropdown} alt="drop-down" />
          <a href="/pricing">Pricing</a>
          <a href="/audits">Our Audits</a>
          <a href="/tools">Tools</a>
          <img src={dropdown} alt="drop-down" />
          <a href="/resources">Resources</a>
          <img src={dropdown} alt="drop-down" />
          <a href="/referral">Refer-Earn-Secure</a>
        </div>
        <button className="button-gradient shadow-lg text-white py-2 px-6 rounded-md cursor-pointer w-max">
          Request An Audit
        </button>
      </div>
    </div>
  );
};

export default Header;
