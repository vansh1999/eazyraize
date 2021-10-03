import Navbar from "../components/Navbar";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import "./kyc.css";
import './Airdrop.css'

export default function Airdrops() {
  return (

    <>

<Navbar />


<div className="kyc-container">


  <div className="left-side">
    <DashboardNav />
  </div>


  <div className="right-side">

    <div></div>

    <div className="content">

    <div className="airdrop-type">
          <p>
          Upcoming Airdrops
          </p>
          <p>
          Past Airdrops
          </p>
          
    </div>

    <p className="airdrops">
      Token Staked - 20000
    </p>

    <p className="airdrops"> 
    Airdrop Eligibility - YES
    </p>

    <div className="airdrop-type">
          <p>
          Airdrops Available
          </p>
    </div>

    <div className="ido-list">
          
          <div class="card">
            <div class="card__content">
              <h3 class="card__header">EZR monthly random drop</h3>
              <p class="card__info">Winners - 50</p>
              <p class="card__info">Total tokens airdrop - 50000</p>
              <p class="card__info">Tokens per wallet</p>
              <p class="card__info">Date - 25.05.2022</p>
              
            </div>
          </div>
          
          <div class="card">
          <div class="card__content">
              <h3 class="card__header">EZR monthly random drop</h3>
              <p class="card__info">Winners - 50</p>
              <p class="card__info">Total tokens airdrop - 50000</p>
              <p class="card__info">Tokens per wallet</p>
              <p class="card__info">Date - 25.05.2022</p>
              
            </div>
          </div>

        </div>


    </div>

    <div></div>

  </div> 
  
</div>

<Footer/>

    </>

  );
}
