import React from "react";
import { ReactDOM } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>

            {/* color pallete for the app */}
            <div className="d-flex">
                <div className="bg-primary rounded mx-2" style={{height:'20px',width:'20px', cursor:'pointer'}} onClick={()=> {props.toggleMode('primary')}}></div>

                <div className="bg-warning rounded mx-2" style={{height:'20px',width:'20px', cursor:'pointer'}} onClick={()=> {props.toggleMode('warning')}}></div>

                <div className="bg-danger rounded mx-2" style={{height:'20px',width:'20px', cursor:'pointer'}} onClick={()=> {props.toggleMode('danger')}}></div>

                <div className="bg-success rounded mx-2" style={{height:'20px',width:'20px', cursor:'pointer'}} onClick={()=> {props.toggleMode('success')}}></div>
            </div>
        

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
              onClick ={()=> {props.toggleMode('null')}} />
              <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Dark/Light Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
