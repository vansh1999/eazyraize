import React from "react";
import "./Faq.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Faq() {
  return (
    <div>
      <Navbar />
      <div className="faq-container">
        <h2>FAQ</h2>
        <div className="questions">
          <div className="question">
            <p className="que">1. How do I participate in IDOs?</p>
            <p className="ans">Steps</p>
          </div>
          <div className="question">
            <p className="que">2. What are the steps to whitelist for IDO?</p>
            <p className="ans">answer</p>
          </div>
          <div className="question">
            <p className="que">
              3. Do I have to stake PRP 5 days before the IDO?
            </p>
            <p className="ans">answer</p>
          </div>
          <div className="question">
            <p className="que">4. Qualifications to participate in IDO?</p>
            <p className="ans">answer</p>
          </div>
          <div className="question">
            <p className="que">5. Are the allocations guaranteed?</p>
            <p className="ans">answer</p>
          </div>
          <div className="question">
            <p className="que">6. How will I find out about my allocation?</p>
            <p className="ans">answer</p>
          </div>
          <div className="question">
            <p className="que">7. What can I fund my allocation with?</p>
            <p className="ans">answer</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
