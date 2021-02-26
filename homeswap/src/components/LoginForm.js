import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

function LoginForm({ submitHandler, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => submitHandler(e, email, password)}>
      <h2>Login</h2>
      <p>Welcome back</p>
      {error && <ErrorMessage error={error} />}
      <input
        type="email"
        required
        placeholder="Enter you email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        required
        placeholder="Enter you password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        disabled={email && password ? false : true}
        onClick={(e) => submitHandler(e, email, password)}
      >
        Login
      </button>
      <hr />
      <p>
        New user? <Link to="/signup">Register here</Link>
      </p>
    </form>
  );
}

export default LoginForm;
