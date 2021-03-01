import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

function SignupForm({ registerHandler, error }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => registerHandler(e, username, email, password)}>
      <h2>Register</h2>
      {error && <ErrorMessage error={error} />}
      <input
        type="text"
        required
        placeholder="Enter you username"
        onChange={(e) => setUsername(e.target.value)}
      />
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
        //disabled={email && password && username ? false : true}
        onClick={(e) => registerHandler(e, username, email, password)}
      >
        Register
      </button>
      <hr />
      <p>
        Have an account? <Link to="/login">Login here</Link>
      </p>
    </form>
  );
}

export default SignupForm;
