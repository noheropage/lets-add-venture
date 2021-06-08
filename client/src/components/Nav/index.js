import React, { useState } from "react";
// import { Navbar } from "react-bootstrap";
import "./style.css";
// import AuthNav from "../auth-nav";
import API from "../../utils/API";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

function Nav() {
  const [find, setFind] = useState("");

  function handleInputChange(event) {
    setFind(event.target.value);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(find);
    const query = { user_name: find };
    const searchResult = await API.postUsers(query);
    let userId;
    if (searchResult.data) {
      console.log(searchResult.data);
      userId = searchResult.data.id;
    } else {
      userId = -1;
    }

    document.location.replace("/profile/" + userId);
  };

  return (

    <Navbar className="nav-text " bg="dark" variant="dark" expand="lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Lets+Venture</a>

        <div className="navbar" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link" href="/map">Map</a>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>


    //   <div>
    //     <Navbar id="navbar">
    //       <input
    //         type="text"
    //         placeholder="Search users"
    //         onChange={(event) => setFind(event.target.value)}
    //       ></input>
    //       <button onClick={handleFormSubmit}>Search</button>
    //     </Navbar>
    //     <Navbar id="navbar">
    //       <button id="nav-profile-button">Profile</button>
    //       <button id="nav-map-button">Map</button>
    //       <AuthNav />
    //     </Navbar>
    //   </div>
    // );

    // return (

    //<div>
    //     <nav
    //       className="navbar navbar-expand-lg navbar-dark bg-dark"
    //       bg="dark"
    //       variant="dark"
    //       id="navbar"
    //     >
    //       <a className="ml-5 navbar-brand" href="/">
    //         Lets+Venture
    //       </a>

    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-toggle="collapse"
    //         data-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>

    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav mr-auto">
    //           <li className="nav-item">
    //             <a className="nav-link" href="/map">
    //               Map
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/profile">
    //               Profile
    //             </a>
    //           </li>
    //         </ul>
    //         <form
    //           className="search-users form-inline my-2 my-lg-0"
    //           id="navbarSupportedContent"
    //         >
    //           <input
    //             className="form-control mr-sm-2"
    //             type="search"
    //             placeholder="Search for users.."
    //             aria-label="Search"
    //           ></input>
    //           <button
    //             classNameName="mr-5 btn btn-outline-info"
    //             id="nav-search-button"
    //           >
    //             Search
    //           </button>
    //           <input
    //             type="search"
    //             className="form-control mr-sm-2"
    //             placeholder="Search users"
    //             aria-label="Search"
    //             onChange={(event) => setFind(event.target.value)}
    //           ></input>
    //           <button className="mr-5 btn btn-outline-info"
    //             id="nav-search-button" onClick={handleFormSubmit}>Search</button>
    //         </form>
    //       </div>

    //       <a className="nav-link" href="#home">Profile</a>
    //       <a className="nav-link" href="#map">Map</a>
    //   </div>
    //     <input id="nav-searchbar" placeholder="Search users"></input>
    //     <button id="nav-search-button" >Search</button>

    //     <button id="nav-profile-button">Profile</button>
    //     <button id="nav-map-button">Map</button>
    //     <AuthNav />
    // </nav>
    // </div >
    // );
    // )
  )
}


export default Nav;
