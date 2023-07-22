import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center">Copyright © 2023 Gaikwad-Enterprises</h3>
      <p className="text-center">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
}; 

export default Footer;
