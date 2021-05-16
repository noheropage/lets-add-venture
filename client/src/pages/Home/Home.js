import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import alaska from '../../images/alaska.jpeg';
import './Home.css'

function Home() {
    return (
        <div>
            <Jumbotron id="home-jumbo">
                <h1>Lets+Venture</h1>
                <img id="home-img" src={alaska}></img>
                <p id="home-p">Connect with others to enjoy and explore the great outdoors!</p>
                <button className="home-buttons">Log in</button>
                <button className="home-buttons">Sign Up</button>
            </Jumbotron>
    </div>
    )
}

export default Home;