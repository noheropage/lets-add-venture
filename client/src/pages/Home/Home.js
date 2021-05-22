import React from 'react';
import { Button } from 'react-bootstrap';
import alaska from '../../images/alaska.jpeg';
import './Home.css'
import logoLettering from '../../images/logoLettering.svg';
import logo from '../../images/logo.png'
import Nav from '../../components/Nav';

function Home() {
    return (
        <div>
            <div id="home-jumbo">
                <img src={logo} className="logo"/>
                <img id="logo-lettering" src={logoLettering} />
                <br/>
                <img id="home-img" src={alaska}></img>
                <p id="home-p">Connect with others to enjoy and explore the great outdoors!</p>
                <Button className="home-buttons" style={{ backgroundColor: "#295939", border: "none", marginBottom: "55px" }} href='/login'>Log in</Button>
                <Button className="home-buttons" style={{ backgroundColor: "#295939", border: "none", marginBottom: "55px" }} href='/signup'>Sign Up</Button>
            </div>
        </div>
    )
}

export default Home;