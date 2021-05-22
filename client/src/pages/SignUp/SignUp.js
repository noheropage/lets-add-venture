import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "../../components/Col/Col";
import Row from "../../components/Row/Row";
import Container from "../../components/Container/Container";
import "./SignUp.css";
import MtnLogo from "../../components/MtnLogo/MtnLogo";
import Nav from "../../components/Nav";

// import GoogleLogin from 'react-google-login'

//set the state of each thing we will ask the user
function Signup() {
    // const [user, SetUser] = useState([]);
    const [formObject, setFormObject] = useState({});

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveUser method to save the user data
    // 
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.firstName && formObject.email && formObject.password) {
            API.saveUser({
                firstName: formObject.firstName,
                lastName: formObject.lastName,
                email: formObject.email,
                password: formObject.password
            })
                .then(document.location.replace("/questions")
                )
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="signup-background">
            <MtnLogo />
            <div className="mt-4">
                <h2>Create an account to save your progress.</h2>
            </div>
            <form>
                <Container className="mt-3 px-5">

                    <Row className="form-group pb-4">
                        <Col size="12">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="First Name"
                                name="first-name"
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Row>

                    {/* submit button */}
                    <Button onClick={handleFormSubmit} type="submit" className=" signup-button">Submit</Button>

                    {/* old sign up w/ google button */}
                    {/* <div className="g-signin2" data-onsuccess="Google_signIn"></div> */}


                </Container>
                {/* <GoogleLogin /> */}
            </form>
        </div>
    )
}

export default Signup;