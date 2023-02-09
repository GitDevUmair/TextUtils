// import { useState } from "react";
import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
export default function TextForm(props) {
  const [text, setText] = React.useState("");
  const changeUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Success : changed to uppercase", "success");
  };
  const changeLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Success : changed to lowercase", "success");
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Success : text cleared", "danger");
  };
  const removeSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Success : removed extra spaces", "success");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Success : text copied", "success");
  };
  let bgcolor;
  let clr;
  if (props.mode === "dark" && props.redmode === "Enable red mode") {
    bgcolor = "#13436b";
    clr = "white";
  } else if (props.mode === "light" && props.redmode === "back to normal") {
    bgcolor = "#eb1c1c";
    clr = "black";
  } else {
    bgcolor = "white";
    clr = "black";
  }
  return (
    <>
      <Container>
        <h1
          className="my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          {props.heading}
        </h1>
        <FloatingLabel>
          <Form.Control
            as="textarea"
            id="Box"
            placeholder="Leave a comment here"
            value={text}
            style={{ backgroundColor: bgcolor, color: clr, height: "180px" }}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </FloatingLabel>
        <Button
          disabled={text.length === 0}
          variant={`${
            props.redmode === "Enable red mode" ? "primary" : "warning"
          } mx-2 btn-sm my-3`}
          onClick={changeUp}
        >
          change-to-uppercase
        </Button>
        <Button
          disabled={text.length === 0}
          variant={`${
            props.redmode === "Enable red mode" ? "primary" : "warning"
          } mx-2 btn-sm my-3`}
          onClick={changeLow}
        >
          change-to-lowercase
        </Button>
        <Button
          disabled={text.length === 0}
          variant={`${
            props.redmode === "Enable red mode" ? "primary" : "warning"
          } mx-2 btn-sm my-3`}
          onClick={clearText}
        >
          clear text
        </Button>
        <Button
          disabled={text.length === 0}
          variant={`${
            props.redmode === "Enable red mode" ? "primary" : "warning"
          } mx-2 btn-sm my-3`}
          onClick={removeSpaces}
        >
          remove extra spaces
        </Button>
        <Button
          disabled={text.length === 0}
          variant={`${
            props.redmode === "Enable red mode" ? "primary" : "warning"
          } mx-2 btn-sm my-3`}
          onClick={copyText}
        >
          Copy text
        </Button>
      </Container>
      <Container style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your text summary</h2>
        <p>
          <b>{text.length}</b> characters and{" "}
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
          </b>{" "}
          words
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
          </b>{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview here"}</p>
      </Container>
    </>
  );
}
