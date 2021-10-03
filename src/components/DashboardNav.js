import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./DashboardNav.scss";

const drawerWidth = 240;

export default function DashboardNav() {
  return (
    <div className="dashboard-nav" role="navigation">
      <ul class="unstyled list-hover-slide">
        <li>
          <Link
            className="logo"
            style={{ textDecoration: "none", color: "#fff" }}
            to="/kyc"
          >
            KYC
          </Link>
        </li>

        <li>
          <Link
            className="logo"
            style={{ textDecoration: "none", color: "#fff" }}
            to="/projects"
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            className="logo"
            style={{ textDecoration: "none", color: "#fff" }}
            to="/staking"
          >
            Staking
          </Link>
        </li>

        <li>
          <Link
            className="logo"
            style={{ textDecoration: "none", color: "#fff" }}
            to="/airdrops"
          >
            Airdrops
          </Link>
        </li>

        <li>
          <Link
            className="logo"
            style={{ textDecoration: "none", color: "#fff" }}
            to="/tokenledger"
          >
            Token Analytics
          </Link>
        </li>
      </ul>

      {/* <div>
        <Link
          className="logo"
          style={{ textDecoration: "none", color: "#fff" }}
          to="/kyc"
        >
          KYC
        </Link>
      </div>

      <div>
        <Link
          className="logo"
          style={{ textDecoration: "none", color: "#fff" }}
          to="/projects"
        >
          Projects
        </Link>
      </div>

      <div>
        <Link
          className="logo"
          style={{ textDecoration: "none", color: "#fff" }}
          to="/staking"
        >
          Staking
        </Link>
      </div>

      <div>
        <Link
          className="logo"
          style={{ textDecoration: "none", color: "#fff" }}
          to="/airdrops"
        >
          Airdrops
        </Link>
      </div>

      <div>
        <Link
          className="logo"
          style={{ textDecoration: "none", color: "#fff" }}
          to="/tokenledger"
        >
          Token Ledger
        </Link>
      </div> */}
    </div>
  );
}
