import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import "../css/Login.css";
import axios from "axios";
import login_bg from "../assests/images/1.jpg";

function LoginPage({ history, logNewUser }) {
  let [error, setError] = useState(null);

  const getUser = async (email, password) => {
    try {
      let response = await axios.post("/api/users/login", { email, password });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email && password) {
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email.");
      } else {
        let response = await getUser(email, password);

        if (response) {
          if (response.data.error) {
            setError(response.data.error);
          } else {
            let user = response.data;
            localStorage.setItem("user", JSON.stringify(user));
            logNewUser(user);
            history.push(`/profile/${user._id}`);
          }
        }
      }
    } else {
      setError("Please fill in all the fields.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <LoginForm handleLogin={handleLogin} error={error} />
      </div>
      <div
        className="auth-bg"
        style={{ backgroundImage: `url(${login_bg})` }}
      ></div>
    </div>
  );
}

export default LoginPage;
