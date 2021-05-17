import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import alaska from '../../images/alaska.jpeg';
import './Home.css'
import logoLettering from '../../images/logoLettering.svg';
import logo from '../../images/logo.png'

function Home() {
    return (
        <div>
            <Jumbotron id="home-jumbo">
                <img src={logo} className="logo"/>
                <img src={logoLettering}/>
                <img id="home-img" src={alaska}></img>
                <p id="home-p">Connect with others to enjoy and explore the great outdoors!</p>
                <button className="home-buttons">Log in</button>
                <button className="home-buttons">Sign Up</button>
            </Jumbotron>
    </div>
    )
}

export default Home;