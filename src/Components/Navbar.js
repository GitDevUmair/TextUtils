import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
// import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
export default function Navebar(props) {
  let x;
  // if (props.mode === "light" && props.redmode === "Enable red mode") {
  //   x = "light";
  // } else {
  //   x = "dark";
  // }
  if (props.mode === "light" && props.redmode === "Enable red mode") {
    x = "dark";
  } else if (props.mode === "light" && props.redmode === "back to normal") {
    x = "light";
  } else if (props.mode === "dark" && props.redmode === "Enable red mode") {
    x = "light";
  }
  return (
    <div>
      <Navbar bg={x === "dark" ? "light" : "dark"} variant={x} expand="lg">
        <Container fluid>
          {/* <Navbar.Brand to="/">{props.title}</Navbar.Brand> */}
          <Link
            to="/"
            className="mx-4"
            style={{
              color: `text-${x}`,
              textDecoration: "none",
            }}
          >
            <b> {props.title} </b>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link to="/about">{props.about}</Nav.Link> */}
              <Link
                to="/about"
                style={{
                  color: `text-${props.mode === "dark" ? "light" : "dark"}`,
                  textDecoration: "none",
                }}
              >
                <b> {props.about} </b>
              </Link>
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
                //className={`text-${x === "light" ? "dark" : "light"}`}
                className={`text-${x}`}
                onClick={props.switchRed}
              />
              <Form.Check
                type="switch"
                id="custom-switch"
                label={`Enable ${
                  props.mode === "dark" ? "light" : "dark"
                } mode`}
                // className={`text-${props.mode === "dark" ? "light" : "dark"}`}
                className={`text-${x}`}
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
