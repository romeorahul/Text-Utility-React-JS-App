import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

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

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');

  }
  const toggleMode = (cls) => {
    // console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+ cls);
    
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
      <Nav title="TEXT-MASTER" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Form
                heading="Enter the text you want"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
