import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navebar(props) {
  let x;
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

            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label={props.redmode}
                className={`text-${x}`}
                onClick={props.switchRed}
              />
              <Form.Check
                type="switch"
                id="custom-switch"
                label={`Enable ${
                  props.mode === "dark" ? "light" : "dark"
                } mode`}
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
