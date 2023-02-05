import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link,
// } from "react-router-dom";

function App() {
  const [redmode, setredMode] = React.useState("Enable red mode");
  const [alert, setAlert] = React.useState(null);
  const [mode, setMode] = React.useState("light");
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const switchRed = () => {
    if (redmode === "Enable red mode") {
      setredMode("back to normal");
      document.body.style.backgroundColor = "red";
      showAlert("Success : red mode enabled", "primary");
    } else {
      setredMode("Enable red mode");
      document.body.style.backgroundColor = "white";
      showAlert("Success: Back to normal", "primary");
    }
  };
  const switchMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Success : Dark mode enabled", "primary");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Success : Light mode enabled", "primary");
    }
  };

  return (
    <>
      <Navbar
        title="Textutils"
        about="About"
        switchMode={switchMode}
        mode={mode}
        redmode={redmode}
        switchRed={switchRed}
      />
      <Alert alert={alert} />
      {/* <Router> */}
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {/* <Routes> */}
      {/* <Route path="/about">
            <About />
          </Route> */}
      {/* <Route */}
      {/* path="/" */}
      {/* element={ */}
      <TextForm
        heading="Enter Text Here"
        mode={mode}
        redmode={redmode}
        showAlert={showAlert}
      />
      {/* } */}
      {/* /> */}

      {/* <Route path="/about" element={<About />} />
        </Routes>
      </Router> */}

      {/* <About /> */}
    </>
  );
}

export default App;
