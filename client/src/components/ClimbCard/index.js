import React from 'react';
import Card from 'react-bootstrap/Card';

export default function ClimbCard(props) {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.climb}, {props.difficulty}</Card.Title>
          <Card.Text>
            {props.FrAsc}
            <br/>
            {props.description}
          </Card.Text>
          

        </Card.Body>
      </Card>
   
    )
}