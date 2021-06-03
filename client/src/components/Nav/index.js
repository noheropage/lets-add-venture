import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import "./style.css";
import AuthNav from "../auth-nav";
import API from "../../utils/API";

function Nav() {
  const [search, setSearch] = useState({});

  function handleInputChange(event) {
    // console.log("This is the search bar!");

    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
    console.log(search);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // console.log("This is the search button!");
    //   API.getUser({})
  }

  return (
    <div>
      <Navbar id="navbar">
        <form>
          <input
            id="nav-searchbar"
            type="text"
            name="user-search"
            placeholder="Search users"
            onChange={handleInputChange}
          ></input>
          <button
            id="nav-search-button"
            type="submit"
            onClick={handleFormSubmit}
          >
            Search
          </button>
        </form>
      </Navbar>
      <Navbar id="navbar">
        <button id="nav-profile-button">Profile</button>
        <button id="nav-map-button">Map</button>
        <AuthNav />
      </Navbar>
    </div>
  );
}

export default Nav;
