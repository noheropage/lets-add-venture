import React from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

function SavedClimbs(props) {
  const pastClimbs = (
    <Popover>
      <Popover.Title as="h4">{props.climbTitle}</Popover.Title>
      <Popover.Content as="h5">Difficulty: {props.difficulty}</Popover.Content>
    </Popover>
  );
  return (
    <div>
      <OverlayTrigger trigger="click" placement="top" overlay={pastClimbs}>
        <Button variant="success">{props.climbTitle}</Button>
      </OverlayTrigger>
    </div>
  );
}
export default SavedClimbs;
