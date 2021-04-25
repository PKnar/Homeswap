import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import axios from "axios";
import login_bg from "../assests/images/3.jpg";

function SignupPage({ history, logNewUser }) {
  let [error, setError] = useState(null);

  const createUser = async (name, email, password) => {
    try {
      let response = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const registerHandler = async (e, name, email, password) => {
    e.preventDefault();
    let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name && email && password) {
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email.");
      } else {
        let response = await createUser(name, email, password);

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
        <SignupForm registerHandler={registerHandler} error={error} />
      </div>
      <div
        className="auth-bg"
        style={{
          backgroundImage: `url(${login_bg})`,
        }}
      ></div>
    </div>
  );
}

export default SignupPage;
