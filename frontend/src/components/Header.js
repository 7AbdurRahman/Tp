import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./logo.jpg";

const Header = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const invalid = sessionStorage.getItem("users");
    const valid = JSON.parse(invalid);
    if (valid !== null && valid?.uname !== null) {
      setLogged(true);
    }
  }, []);

  return (
    <>
      <div className="Navbar">
        <img src={logo} alt="logo" />
        <ul>
          <div className="mob-nav">
            <li>
              {logged ? (
                <NavLink to="/login" className="navText">
                  LogOUT
                </NavLink>
              ) : (
                <NavLink to="/login" className="navText">
                  LogIN
                </NavLink>
              )}
            </li>
            {/* <li>
              <NavLink to="/" className="navText">
                Home
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/about" className="navText">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navText">
                Contact
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Header;
