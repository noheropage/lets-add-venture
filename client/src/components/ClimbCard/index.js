import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
require("dotenv").config();

export default function ClimbCard(props) {
  const { getAccessTokenSilently, user } = useAuth0();
  const auth0id = user.sub.split("|", 2)[1];

  const [climb, setClimb] = useState({
    image: " ",
    climb_name: " ",
    rating: " ",
    wall: " ",
    firstAscent: " ",
    description: " ",
  });
  const [isDisabled, setDisabled] = useState(false);

  const handleExist = () => {
    setDisabled(true);
  };

  const climbData = {
    image: props.image,
    name: props.climbTitle,
    rating: props.difficulty,
    wall: props.wall,
    firstAscent: props.FrAsc,
    description: props.description,
  };

  function handleClick(e) {
    setClimb({
      ...climb,
      climbData,
    });
    handleExist();
    postToApi();
  }

  function postToApi() {
    API.saveToPastClimb({
      climb_name: props.climbTitle,
      rating: props.difficulty,
      auth0_id: auth0id,
      api_id: props.api_id,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <Col className="mt-4" xs={12} sm={8} md={8} lg={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Header>Name: {props.climbTitle}</Card.Header>
        <Card.Body className="font-weight-light">
          Rating: {props.difficulty}
          <br />
          Wall: {props.wall}
          <br />
          First Ascent: {props.FrAsc}
          <br />
          {props.description}
          <Button onClick={handleClick} disabled={isDisabled} id={props.api_id}>
            Save
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
