import React from 'react';
import Card from 'react-bootstrap/Card';
import "./style.css";
import Col from "react-bootstrap/Col";

export default function ClimbCard(props) {
  return (
    <Col className="mt-4" xs={12} sm={8} md={8} lg={4}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />

        <Card.Header>Name: {props.climbTitle}
        </Card.Header>
        <Card.Body className="font-weight-light">
          Rating: {props.difficulty}
          <br />
          Crag: {props.crag}
          <br />
          First Ascent: {props.FrAsc}
          <br />
          {props.description}
        </Card.Body>
      </Card >
    </Col >

  )
}