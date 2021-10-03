import React from 'react';
import Footer from '../components/Footer';
import './Landing.css'
import Poster from './images/landing-poster.jpeg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Landing() {
  return (
    <>
        <div className="landing-container">

            <div className="left-side-container">
                <p>Welcome to EazyRaize Ecosystem</p>
                {/* <button>Enter</button> */}
                <button>
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to="/home">Enter</Link>
                </button>
            </div>

            <div className="right-side-container">
                <img src={Poster} alt="poster"/>
            </div>

        </div>


        <Footer/>
    </>
  );
}
