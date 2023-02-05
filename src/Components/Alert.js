import React from "react";
import Alert from "react-bootstrap/Alert";

function Alertfunc(props) {
  return (
    props.alert && (
      <div>
        <Alert key={props.alert.type} variant={props.alert.type}>
          {props.alert.msg}
        </Alert>
      </div>
    )
  );
}

export default Alertfunc;
