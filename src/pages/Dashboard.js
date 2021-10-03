import React from "react";
import DashboardNav from "../components/DashboardNav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <DashboardNav />
      <Footer />
    </div>
  );
}
