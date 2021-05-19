import React, { useState } from "react";
import Col from "../../components/Col/Col";
import Row from "../../components/Row/Row";
import Container from "../../components/Container/Container";
import "./SignUp.css";
import MtnLogo from "../../components/MtnLogo/MtnLogo";
// import GoogleLogin from 'react-google-login'

document.body.style = 'background: #E8E6E6;';

//set the state of each thing we will ask the user
function Signup() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [pronoun, setPronoun] = useState();
    const [prefIntensity, setPrefIntensity] = useState();
    const [climbAbility, setClimbAbility] = useState();
    const [boulderAbility, setBoulderAbility] = useState();
    const [climbHistory, setClimbHistory] = useState();

    //log it to the console to be sure it's going through
    const handleSubmit = e => {
        e.preventDefault();
        console.log("firstName is " + firstName);
        console.log("password is " + lastName);
        console.log("email address is " + email);
        console.log("password is " + password);
        console.log("username is " + username);
        console.log("pronoun is " + pronoun);
        console.log("Preferred Intensity is " + prefIntensity);
        console.log("Climbing Ability is " + climbAbility);
        console.log("Bouldering Ability is " + boulderAbility);
        console.log("Climbing History is " + climbHistory);

    };

    // old google sign in button saving just in case

    // const Google_signIn = (googleUser) => {
    //     var profile = googleUser.getBasicProfile();
    //     console.log('ID: ' + profile.getId());
    //     console.log('Name: ' + profile.getName());
    //     console.log('Image URL: ' + profile.getImageUrl());
    //     console.log('Email: ' + profile.getEmail());

    //     sessionStorage.setItem("loggedUser", profile.getEmail().toString());
    //     document.location.href = 'home.html';
    // };

    return (
        <div>
            <MtnLogo />
            <div className="mt-4">
                <h2>Create an account to save your progress.</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <Container className="mt-3 px-5">

                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="First Name"
                                name="first-name"
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Last Name"
                                name="last-name"
                                onChange={e => setLastName(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Email Address"
                                name="email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Username"
                                name="user-name"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Password"
                                name="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Preferred Pronoun"
                                name="pronoun"
                                onChange={e => setPronoun(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Preferred Intensity"
                                name="preferred-intensity"
                                onChange={e => setPrefIntensity(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Climbing Ability (<5.9 - 5.13+)"
                                name="climb-ability"
                                onChange={e => setClimbAbility(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Bouldering ABility (V0 - V10+)"
                                name="boulder-ability"
                                onChange={e => setBoulderAbility(e.target.value)}
                            />
                        </Col>
                    </Row>

                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control climb-history"
                                type="text"
                                placeholder="Tell us about your Climbing History.."
                                name="climb-history"
                                onChange={e => setClimbHistory(e.target.value)}
                            />
                        </Col>
                    </Row>

                    {/* submit button */}
                    <button className="btn btn-success mb-4" type="submit">
                        Submit
            </button>

                    {/* old sign up w/ google button */}

                    {/* <div className="g-signin2" data-onsuccess="Google_signIn"></div> */}


                </Container>
                {/* <GoogleLogin /> */}
            </form>
        </div>
    )
}

export default Signup;