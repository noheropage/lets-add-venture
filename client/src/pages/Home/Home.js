import React from "react";
import { Button } from "react-bootstrap";
import LoginButton from '../../components/login-button'
import alaska from "../../images/alaska.jpeg";
import "./Home.css";
import logoLettering from "../../images/logoLettering.svg";
import logo from "../../images/logo.png";
import SignupButton from "../../components/signup-button";
import AuthenticationButton from "../../components/authentication-button";

function Home() {
  return (
    <div>
      <div id="home-jumbo">
        <img src={logo} className="logo" />
        <img id="logo-lettering" src={logoLettering} />
        <br />
        <img id="home-img" src={alaska}></img>
        <p id="home-p">
          Connect with others to enjoy and explore the great outdoors!
        </p>
        <AuthenticationButton />
        
        <SignupButton />
        
      </div>
    </div>
  );
}

export default Home;
