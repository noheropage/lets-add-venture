import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

function Nav() {
  const [find, setFind] = useState("");

  function handleInputChange(event) {
    setFind(event.target.value);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const query = { user_name: find };
    const searchResult = await API.postUsers(query);
    let userId;
    if (searchResult.data) {
      userId = searchResult.data.user_id;
    } else {
      userId = -1;
    }

    document.location.replace("/profile/" + userId);
  };

  return (
    <Navbar className="nav-text" variant="dark" expand="lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Lets+Venture
        </a>

        <div className="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/map">
                Map
              </a>
            </li>
          </ul>
          <form
            className="search-users form-inline my-2 my-lg-0"
            id="navbarSupportedContent"
          >
            <input
              type="search"
              className="form-control mr-sm-2"
              placeholder="Search users"
              aria-label="Search"
              onChange={(event) => setFind(event.target.value)}
            ></input>
            <button
              className="mr-5 btn btn-outline-info"
              id="nav-search-button"
              onClick={handleFormSubmit}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </Navbar>
  );
}

export default Nav;
