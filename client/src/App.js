import './App.css';
import Signup from "./pages/SignUp/SignUp";
import React from "react";
// import GoogleLogin from 'react-google-login';
import Home from "./pages/Home/Home";


const showHome = () => {
  if (window.location.pathname === "/") {
    return <Home />;
  }
}

const showSignUp = () => {
  if (window.location.pathname === "/signup") {
    return <Signup />;
  }
}

export default () => {
  return (
    <div className="ui container">
      { showHome()}
      { showSignUp()}
    </div>
  )
}