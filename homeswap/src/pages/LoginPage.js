import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import "../css/Login.css";

//state management
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userAction";

function LoginPage({ location, history }) {
  //redux
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  if (userInfo) {
    history.push(`/profile/${userInfo._id}`);
  }

  const submitHandler = (e, email, password) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <LoginForm submitHandler={submitHandler} error={error} />
      </div>
    </div>
  );
}

export default LoginPage;
