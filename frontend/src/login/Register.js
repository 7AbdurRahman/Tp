import React, { useState, useEffect } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const toLogin = () => {
    const registerData = {
      name: name,
      email: email,
      uname: uname,
      password: password,
    };
    axios
      .post("http://localhost:8001/register", registerData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/login");
  };
  return (
    <>
      <div className="container">
        <form className="form">
          <h1>Register</h1>
          <div className="inputs">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="someone@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
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
            <button onClick={() => toLogin()} className="loginBtn">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
