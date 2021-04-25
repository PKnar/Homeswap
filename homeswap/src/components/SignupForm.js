import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

function SignupForm({ registerHandler, error }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="auth-form-wrapper">
      <h2>Welcome to Homeswap</h2>
      <form onSubmit={(e) => registerHandler(e, username, email, password)}>
        {error && <ErrorMessage error={error} />}
        <div className="input-container">
          <label>Username*</label>
          <input
            type="text"
            required
            placeholder="John "
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Email*</label>
          <input
            type="email"
            required
            placeholder="mail@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password*</label>
          <input
            type="password"
            required
            placeholder="Min. 8 Characters"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            color: "gray",
            padding: " 0 1rem ",
            marginTop: "-15px",
          }}
        >
          <div>
            {" "}
            <input style={{ outline: "red" }} type="checkbox" />
            <label style={{ marginLeft: "-10px" }}>Remember me</label>
          </div>
        </div>
        <button
          className="register"
          //disabled={email && password && username ? false : true}
          onClick={(e) => registerHandler(e, username, email, password)}
        >
          Register
        </button>

        <p>
          Have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
