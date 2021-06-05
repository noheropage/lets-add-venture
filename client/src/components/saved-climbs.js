import React from 'react';
// import Card, { Popover } from 'react-bootstrap/Card';
import {Popover, OverlayTrigger, Button } from 'react-bootstrap';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Button from 'react-bootstrap/Button';
// import "./style.css";
// import Col from "react-bootstrap/Col";
// import { propTypes } from 'react-bootstrap/esm/Image';

function SavedClimbs(props) {
    const pastClimbs = (
        <Popover>
            <Popover.Title 
                as='h4'>{props.climbTitle}
            </Popover.Title>
            <Popover.Content
                as='h5'>Difficulty: {props.difficulty}
            </Popover.Content>
        </Popover>
    );
    return (
        <div>
            <OverlayTrigger trigger="click" placement="top" overlay={pastClimbs}>
                <Button variant='success'>{props.climbTitle}</Button>
            </OverlayTrigger>
        </div>
    )
}
export default SavedClimbs;