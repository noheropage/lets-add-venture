import React from 'react';
import Card from 'react-bootstrap/Card';

export default function ClimbCard(props) {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>Name: {props.climbTitle} Rating: {props.difficulty}
          <br/>
          Crag: {props.crag}
          </Card.Title>
          <Card.Text>
            First Ascent: {props.FrAsc}
            <br/>
            {props.description}
          </Card.Text>
          

        </Card.Body>
      </Card>
   
    )
}