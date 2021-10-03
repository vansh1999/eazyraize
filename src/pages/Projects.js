import Navbar from "../components/Navbar";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import "./kyc.css";

export default function Projects() {
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

    <div></div>

  </div> 
  
</div>

<Footer/>

    </>

  );
}
