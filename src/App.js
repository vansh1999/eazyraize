import "./App.css";
import Landing from "./pages/Landing";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Dashboard from "./pages/Dashboard";
import KYC from "./pages/KYC";
import Projects from "./pages/Projects";
import Staking from "./pages/Staking";
import Airdrops from "./pages/Airdrops";
import Tokenledger from "./pages/Tokenledger";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing/>
          </Route>
          <Route path="/home" exact>
            <Home/>
          </Route>
          <Route path="/faq" exact>
            <Faq/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/kyc">
            <KYC/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/staking">
            <Staking/>
          </Route>
          <Route path="/airdrops">
            <Airdrops/>
          </Route>
          <Route path="/tokenledger" exact>
            <Tokenledger/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
