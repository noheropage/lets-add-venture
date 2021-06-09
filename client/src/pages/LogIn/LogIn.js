import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "../../components/Col/Col";
import Row from "../../components/Row/Row";
import Container from "../../components/Container/Container";
import "./LogIn.css";
import MtnLogo from "../../components/MtnLogo/MtnLogo";
import Nav from "../../components/Nav";

// import GoogleLogin from 'react-google-login'

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container login-background">
      <MtnLogo />
      <div className="row text-center mt-4">
        <h4>Enter your email and password to Login!</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group pb-4">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Row>
          <Button href="/profile" className="login-button">
            Submit
          </Button>
        </Container>
      </form>
    </div>
  );
}

export default Signup;
