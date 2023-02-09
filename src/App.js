import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

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
      document.body.style.backgroundColor = "#f50707";
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
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          switchMode={switchMode}
          mode={mode}
          redmode={redmode}
          switchRed={switchRed}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter Text Here"
                mode={mode}
                redmode={redmode}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/about"
            element={<About mode={mode} redmode={redmode} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
