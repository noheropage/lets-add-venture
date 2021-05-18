import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import alaska from '../../images/alaska.jpeg';
import './Home.css'
import logoLettering from '../../images/logoLettering.svg';
import logo from '../../images/logo.png'

function Home() {
    return (
        <div>
            <Jumbotron id="home-jumbo">
                <img src={logo} className="logo"/>
                <img id="logo-lettering" src={logoLettering} />
                <br/>
                <img id="home-img" src={alaska}></img>
                <p id="home-p">Connect with others to enjoy and explore the great outdoors!</p>
                <Button className="home-buttons">Log in</Button>
                <Button href='/signup' className="home-buttons">Sign Up</Button>
            </Jumbotron>
    </div>
    )
}

export default Home;