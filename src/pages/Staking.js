import Navbar from "../components/Navbar";
import DashboardNav from "../components/DashboardNav";
import Footer from "../components/Footer";
import "./kyc.css";

export default function KYC() {
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

        <div className="walletconnect">Wallet Connected</div>

        


    </div>

    <div></div>

  </div> 
  
</div>

<Footer/>

    </>

  );
}
