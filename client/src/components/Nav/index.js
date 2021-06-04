import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import "./style.css";
import AuthNav from "../auth-nav";
import API from "../../utils/API";

function Nav() {
  const [find, setFind] = useState("");

  function handleInputChange(event) {
    setFind(event.target.value);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(find);
    const query = { first_name: find };
    const searchResult = await API.postUsers(query);
    console.log(searchResult.data[0].id);
    const userId = searchResult.data[0].id;
    document.location.replace("/profile/" + userId);
  };

  return (
    <div>
      <Navbar id="navbar">
        {/* <form> */}
        <input
          type="text"
          // name="userSearch"
          placeholder="Search users"
          onChange={(event) => setFind(event.target.value)}
        ></input>
        <button onClick={handleFormSubmit}>Search</button>
        {/* </form> */}
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
