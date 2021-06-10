import React, { useState } from "react";
// import { Navbar } from "react-bootstrap";
import "./style.css";
import AuthNav from "../auth-nav";
import API from "../../utils/API";
import { Navbar, Col, Row, Nav, Form, FormControl, Button } from "react-bootstrap";

function NavCom() {
  const [find, setFind] = useState("");

  function handleInputChange(event) {
    setFind(event.target.value);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(find);
    const query = { user_name: find };
    const searchResult = await API.postUsers(query);
    let userId;
    if (searchResult.data) {
      console.log(searchResult.data);
      userId = searchResult.data.user_id;
    } else {
      userId = -1;
    }

    document.location.replace("/profile/" + userId);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/profile">Lets+Venture</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/map">Map</Nav.Link>
          <AuthNav />
        </Nav>
        <Form inline>
          <Row>
            <Col>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Col>
            <Col>
              <Button onClick={handleFormSubmit}variant="outline-secondary">Search</Button>
            </Col>
          </Row>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}


export default NavCom;
