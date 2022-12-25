import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#09163f";
      showAlert("Dark mode is enabled", "success");
      document.title = "Textutils - DARK MODE";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ebebeb";
      showAlert("Light mode is enabled", "success");
      document.title = "Textutils - LIGHT MODE";
    }
  };

  return (
    <>
        <Nav title="TEXTUTILS" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Form
          heading="Enter the text you want"
          mode={mode}
          showAlert={showAlert}
        />
    </>
  );
}

export default App;
