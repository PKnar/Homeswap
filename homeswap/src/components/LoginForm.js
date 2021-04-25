import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

function LoginForm({ handleLogin, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="auth-form-wrapper">
      <h2>Login to your account</h2>

      <form>
        {error && <ErrorMessage error={error} />}
        <div className="input-container">
          <label>Email*</label>
          <input
            type="email"
            required55
            placeholder="mail@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="input-container">
          <label>Password*</label>
          <input
            type="password"
            required
            placeholder="Min. 8 characters"
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
          <p>Forgot Password?</p>
        </div>

        <button
          //disabled={email && password ? false : true}
          onClick={(e) => handleLogin(e, email, password)}
        >
          Login
        </button>

        <p>
          New user? <Link to="/signup">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
