import React from "react";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
// import "./style.css";
import AuthNav from '../auth-nav'



function Nav() {
    return (
        <div>
            {/* <Navbar bg="dark" variant="dark">
                <a class="navbar-brand" href="#home">Lets+Venture</a>
                <div className="mr-auto">
                    <a className="nav-link" href="#home">Profile</a>
                    <a className="nav-link" href="#features">Map</a>
                </div> */}
            {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search Users</Button>
                </Form> */}
            {/* </Navbar> */}

            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" bg="dark" variant="dark" id="navbar">
                <a class="ml-5 navbar-brand" href="/">Lets+Venture</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/map">Map</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/profile">Profile</a>
                        </li>
                    </ul>
                    <form className="search-users form-inline my-2 my-lg-0" id="navbarSupportedContent">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search for users.." aria-label="Search"></input>
                        <button className="mr-5 btn btn-outline-info" id="nav-search-button" >Search</button>
                    </form>

                </div>
                {/* <form className="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search for users.." aria-label="Search"></input>
                        <button className="btn btn-outline-info" id="nav-search-button" >Search</button>
                    </form> */}

                {/* <a className="nav-link" href="#home">Profile</a>
                    <a className="nav-link" href="#map">Map</a>
                </div>
                <input id="nav-searchbar" placeholder="Search users"></input>
                <button id="nav-search-button" >Search</button>

                <button id="nav-profile-button">Profile</button>
                <button id="nav-map-button">Map</button> */}
                {/* <AuthNav /> */}
            </nav>

        </div>
    );
}

export default Nav;
