import React from "react";
import { Button, Container, Row, Col, Image, Carousel } from "react-bootstrap";
import LoginButton from "../../components/login-button";
import alaska from "../../images/alaska.jpeg";
import "./Home.css";
import logoLettering from "../../images/logoLettering.svg";
import logo from "../../images/logo.svg";
import SignupButton from "../../components/signup-button";
import AuthenticationButton from "../../components/authentication-button";
import girl from "../../images/girl-climber.jpeg";
import guys from "../../images/guys-climbers.jpeg";

function Home() {
  return (
    <div className="home-page-background">
      <Container fluid>
        <Row>
          <Col>
            <img className="pb-4 pt-5 pr-1 logo-svg" src={logo} />
            <img className="pb-4 pt-5 logo-lettering" src={logoLettering} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={alaska} alt="First slide" />
                <Carousel.Caption>
                  <h6>Search climbs anywhere in the world.</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={girl} alt="Second slide" />

                <Carousel.Caption>
                  <h6>Go Explore!</h6>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={guys} alt="Third slide" />

                <Carousel.Caption>
                  <h6>
                    Meet up with similarly skilled climbers based on their skill
                    set listed on their profile!
                  </h6>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <p className="pb-5" id="home-p">
            Connect with others to enjoy and explore the great outdoors!
          </p>
        </Row>
        <Row>
          <Col>
            <AuthenticationButton />

            <SignupButton />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
