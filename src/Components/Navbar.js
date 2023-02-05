import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

export default function Navebar(props) {
  return (
    <div>
      <Navbar bg={props.mode} variant={props.mode} expand="lg">
        <Container fluid>
          <Navbar.Brand to="/">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link to="/about">{props.about}</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label={props.redmode}
                className="text-dark"
                onClick={props.switchRed}
              />
              <Form.Check
                type="switch"
                id="custom-switch"
                label={`Enable ${
                  props.mode === "dark" ? "light" : "dark"
                } mode`}
                className={`text-${props.mode === "dark" ? "light" : "dark"}`}
                onClick={props.switchMode}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
Navebar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navebar.defaultProps = {
  title: "enter title",
  about: "About Us",
};
