import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
require('dotenv').config();

export default function ClimbCard(props) {
  const { getAccessTokenSilently, user } = useAuth0();
  const auth0id = user.sub.split('|', 2)[1]

  const [climb, setClimb] = useState({
    image: " ",
    climb_name: " ",
    rating: " ",
    crag: " ",
    firstAscent: " ",
    description: " ",
  });
  const [isDisabled, setDisabled] = useState(false)

  // const [climber, setClimber] = useState({})
  // const [climbed, setClimbed] = useState(false)

  const handleExist = () => {
    setDisabled(true)
  }

  const climbData = {
    image: props.image,
    name: props.climbTitle,
    rating: props.difficulty,
    crag: props.crag,
    firstAscent: props.FrAsc,
    description: props.description,
  };

  // useEffect(() => {
  //   // handleCheck()
  // }, [])

  // function getClimber() {
  //   API.getPastClimbs(auth0id).then(res => {
  //     setClimber(res.data)
  //     console.log(res.data);
  //   }).catch(err => console.error(err))

  //   console.log(props.api_id)
  //   const result = climber.pastClimbs.filter(element === props.api_id)
  //   console.log(result);

  //   if (result) {
  //     setClimbed(true);
  //   }    
  // }

  function handleClick(e) {
    console.log("This is the save button");
    setClimb({
      ...climb,
      climbData,
    });
    handleExist()
    console.log(climbData);
    postToApi();
  }

  function postToApi() {
    API.saveToPastClimb({
      climb_name: props.climbTitle,
      rating: props.difficulty,
      auth0_id: auth0id,
      api_id: props.api_id
    }).then(res=> console.log(res.data)).catch((err) => console.log(err));
  }

  return (
    <Col className="mt-4" xs={12} sm={8} md={8} lg={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Header>Name: {props.climbTitle}</Card.Header>
        <Card.Body className="font-weight-light">
          Rating: {props.difficulty}
          <br />
          Crag: {props.crag}
          <br />
          First Ascent: {props.FrAsc}
          <br />
          {props.description}
          <Button
            // onClick={() => setClimb({ ...climb, name: props.climbTitle })}
            onClick={handleClick}
            disabled={isDisabled}
            id={props.api_id}
          >
            Save
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

// ======================================

// =========================
//  function handleClick(event) {
//   const { name, value } = event.target;
//   setClimb({ ...climb, [name]: value }).then(
//     API.saveClimb({
//       image: props.image,
//       name: props.climbTitle,
//       rating: props.difficulty,
//       crag: props.crag,
//       firstAscent: props.FrAsc,
//       description: props.description,
//     })
//       .then(console.log(climb))
//       .catch((err) => console.log(err))
//   );
// }
