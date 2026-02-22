import React, { useState } from "react";
import { Link } from "react-router";
import img from "/public/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="logo-section">
        <img src={img} alt="logo" id="logo" />
        <p><b><i>APEXLINE</i></b></p>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" className="header_link">Home</Link>
        <Link to="/About" className="header_link">About us</Link>
        <Link to="/Import" className="header_link">Import</Link>
        <Link to="/Exportcomponent" className="header_link">Export</Link>
        <Link className="header_link">Products</Link>
        <Link className="header_link" id="a1">Contact Support</Link>
      </nav>
    </header>
  );
};

export default Header;
