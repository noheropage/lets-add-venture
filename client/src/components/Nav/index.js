import React from "react";
import { Navbar } from 'react-bootstrap';
import "./style.css";

function Nav() {
  return (
    <div>
        <Navbar id="navbar">
            <input id="nav-searchbar" placeholder="Search users"></input>
            <button id="nav-search-button" >Search</button>
        </Navbar>
        <Navbar id="navbar">
            <button id="nav-profile-button">Profile</button>
            <button id="nav-map-button">Map</button>
        </Navbar>
    </div>
    );
}

export default Nav;
