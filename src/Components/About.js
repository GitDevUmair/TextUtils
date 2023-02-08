import { useState } from "react";
import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";
export default function About(props) {
  let bgclr;
  let clr;
  let bdr;
  if (props.mode === "light" && props.redmode === "Enable red mode") {
    bgclr = "white";
    clr = "black";
    bdr = "1px solid black";
  } else if (props.mode === "light" && props.redmode === "back to normal") {
    bgclr = "red";
    clr = "black";
    bdr = "1px solid black";
  } else if (props.mode === "dark" && props.redmode === "Enable red mode") {
    bgclr = "#042743";
    clr = "white";
    bdr = "1px solid white";
  }
  return (
    <>
      <Container>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{ color: clr, backgroundColor: bgclr, border: bdr }}
              >
                <strong>Accordion Item #1</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{ color: clr, backgroundColor: bgclr, border: bdr }}
              >
                This is the first item's accordion body. It is shown by default,
                until the collapse plugin adds the appropriate classes that we
                use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{ color: clr, backgroundColor: bgclr, border: bdr }}
              >
                <strong>Accordion Item #2</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{ color: clr, backgroundColor: bgclr, border: bdr }}
              >
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{ color: clr, backgroundColor: bgclr, border: bdr }}
              >
                <strong>Accordion Item #3</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{ color: clr, backgroundColor: bgclr, border: bdr }}
              >
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
