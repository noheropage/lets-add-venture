import React, { useState } from "react";
import "./style.css";
import API from "../../utils/API";

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
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        bg="dark"
        variant="dark"
        id="navbar"
      >
        <a className="ml-5 navbar-brand" href="/">
          Lets+Venture
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/map">
                Map
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                Profile
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
      </nav>
    </div>
  );
}

export default Nav;
