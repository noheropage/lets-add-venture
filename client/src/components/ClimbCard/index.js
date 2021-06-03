import React from "react";
import Card from "react-bootstrap/Card";
import "./style.css";
import Col from "react-bootstrap/Col";

export default function ClimbCard(props) {
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
        </Card.Body>
      </Card>
    </Col>
  );
}
// ==============================================
// import React, { useState } from "react";
// import Card from "react-bootstrap/Card";
// import "./style.css";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import API from "../../utils/API";

// export default function ClimbCard(props) {
//   const [climb, setClimb] = useState({
//     image: " ",
//     climb_name: " ",
//     rating: " ",
//     crag: " ",
//     firstAscent: " ",
//     description: " ",
//   });

//   // useEffect((e) => {
//   //   API.saveClimb.then
//   // })

//   const climbData = {
//     image: props.image,
//     name: props.climbTitle,
//     rating: props.difficulty,
//     crag: props.crag,
//     firstAscent: props.FrAsc,
//     description: props.description,
//   };

//   function handleClick(e) {
//     setClimb({
//       ...climb,
//       climbData,
//     });
//     console.log(climbData);
//     postToApi();
//   }

//   function postToApi() {
//     API.saveToPastClimb({
//       // climbData,
//       id: "9",
//       name: props.climbTitle,
//       user_id: "1",
//       rating: props.difficulty,
//     }).catch((err) => console.log(err));
//   }

//   return (
//     <Col className="mt-4" xs={12} sm={8} md={8} lg={4}>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={props.image} />
//         <Card.Header>Name: {props.climbTitle}</Card.Header>
//         <Card.Body className="font-weight-light">
//           Rating: {props.difficulty}
//           <br />
//           Crag: {props.crag}
//           <br />
//           First Ascent: {props.FrAsc}
//           <br />
//           {props.description}
//           <Button
//             // onClick={() => setClimb({ ...climb, name: props.climbTitle })}
//             onClick={handleClick}
//           >
//             Save
//           </Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// }

// // ======================================

// // =========================
// //  function handleClick(event) {
// //   const { name, value } = event.target;
// //   setClimb({ ...climb, [name]: value }).then(
// //     API.saveClimb({
// //       image: props.image,
// //       name: props.climbTitle,
// //       rating: props.difficulty,
// //       crag: props.crag,
// //       firstAscent: props.FrAsc,
// //       description: props.description,
// //     })
// //       .then(console.log(climb))
// //       .catch((err) => console.log(err))
// //   );
// // }
