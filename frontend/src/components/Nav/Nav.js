import React from 'react'
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import "../Nav/nav.css";

export const NavPage = () => {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://circlein.com/wp-content/uploads/elementor/thumbs/CI-Landscape-Gradient-1-onirtzjrdivx2a3xb8n0t81wxk108wwio6undogxhi.png"
            width="160"
            height="47"
            className="d-inline-block align-top logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>How it Works</Nav.Link>
          <Nav.Link>Resources</Nav.Link>
          <Nav.Link>Community</Nav.Link>
        </Nav>
        <Form inline>
          <Button className="infoButton mr-sm-2">Book a demo</Button>
          <BsSearch size="1em" />
        </Form>
      </Navbar>
      <div className="container-fluid fornav">
        <div className="row justify-content-center"></div>
        <h1>Seach for youself</h1>
        <p> A detailed URL search to check your web presence.</p>
      </div>
    </div>
  )
}
