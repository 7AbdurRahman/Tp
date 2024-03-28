import React, { useState, useEffect } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const toHome = () => {
    const userData = {
      uname: uname,
      password: password,
    };
    axios
      .post("http://localhost:8001/login", userData)
      .then((res) => {
        // console.log(res);
        sessionStorage.setItem("users", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <form className="form">
          <h1>Login</h1>
          <div className="inputs">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUname(e.target.value);
              }}
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <NavLink to="/register">Create a new account?</NavLink>
            <button onClick={() => toHome()} className="loginBtn">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
