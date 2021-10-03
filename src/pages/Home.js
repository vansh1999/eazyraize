import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>

    <div className="home-container">
      {/* NavBar Section*/}
      <Navbar />

      {/* Content Section*/}

      <div className="home-content">
        <h1>Delfationary Launhpad for early stage creative projects</h1>
        <p>
        Running token & NFT airdrops to $EZR Stakers
        </p>
        <div className="home-info">
          <p>Price</p>
          <p>Marketcap</p>
          <p>Burned</p>
          <p>Projects</p>
          <p>Documents</p>
        </div>
      </div>

      {/* IDOs  Section*/}

      <div className="home-ido">

        <div className="ido-type">
          <p>
            Active
          </p>
          <p>
            Upcoming
          </p>
          <p>
            Ended
          </p>
        </div>

        <div className="ido-list">
          
          <div class="card">
            <div class="card__content">
              <h3 class="card__header">GemGuardian</h3>
              <p class="card__info">Opening: 30 Sep , 12:00 UTC</p>
              <p class="card__info">Total Raise: $100,000</p>
              <p class="card__info">Max allocation: TBA</p>
              <button class="card__button">Register</button>
            </div>
          </div>
          
          <div class="card">
            <div class="card__content">
              <h3 class="card__header">Triall</h3>
              <p class="card__info">Opening: 30 Sep , 12:00 UTC</p>
              <p class="card__info">Total Raise: $90,000</p>
              <p class="card__info">Max allocation: TBA</p>
              <button class="card__button">Register</button>
            </div>
          </div>

          <div class="card">
            <div class="card__content">
              <h3 class="card__header">AMASA</h3>
              <p class="card__info">Opening: 30 Sep , 12:00 UTC</p>
              <p class="card__info">Total Raise: $100,000</p>
              <p class="card__info">Max allocation: TBA</p>
              <button class="card__button">Register</button>
            </div>
          </div>

        </div>

        <div className="ido-launch">
            <button>APPLY TO LAUNCH YOUR IDO</button>
        </div>

      </div>  
    </div>


    {/* partners / investors */}

    <div className="partners">

      <h2>Partners, Investors and Advisors</h2>

      <div className="partners-list">
          <p>Partner Name</p>
          <p>Partner Name</p>
          <p>Partner Name</p>
      </div>

    </div>

    {/* team */}

    <div className="team">

      <h2>Team</h2>

      <div className="team-list">
          <p>Varun Shah</p>
          <p>Vansh Bhardwaj</p>
      </div>

    </div>

    {/* footer */}
    <Footer />

    </>
  );
}
