import { useState } from "react";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./About.css";
export default function About() {
  const [mystyle, setMySyle] = React.useState({
    color: "black",
    backgroundColor: "white",
  });
  const changeMode = () => {
    if (mystyle.color === "black") {
      setBtntxt("Enable Light Mode");
      setMySyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      let check = document.getElementsByClassName("accordion-button");
    } else {
      setBtntxt("Enable Dark Mode");
      setMySyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  const [btntext, setBtntxt] = React.useState("Enable Dark Mode");
  return (
    <>
      <Container>
        <div style={mystyle}>
          <Accordion defaultActiveKey="0" className="my-3">
            <Accordion.Item eventKey="0" style={mystyle}>
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" style={mystyle}>
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" style={mystyle}>
              <Accordion.Header>Accordion Item #3</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
      <Container>
        <Button className="primary mx-2" onClick={changeMode}>
          {btntext}
        </Button>
      </Container>
    </>
  );
}
