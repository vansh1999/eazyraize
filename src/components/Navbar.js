import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link
          className="logo"
          style={{ textDecoration: "none", color: "#fff" }}
          to="/home"
        >
          EazyRaize
        </Link>
      </div>

      <div className="navs">
        <p>Drops</p>
        <p>
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/faq">
            FAQ
          </Link>
        </p>
        <p>
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/kyc">
            Dashboard
          </Link>
        </p>
        <p>
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href={"//metamask.io/"}
            target="_blank"
          >
            Connect Wallet
          </a>
        </p>
        <p>
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href={"//pancakeswap.finance"}
            target="_blank"
          >
            Buy $EZR
          </a>
        </p>
      </div>
    </div>
  );
}
