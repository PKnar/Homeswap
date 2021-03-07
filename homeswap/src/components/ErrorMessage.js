import React from "react";
import { FaXingSquare } from "react-icons/fa";
function ErrorMessage({ error }) {
  return (
    <div
      style={{
        margin: "0.5rem",
        fontSize: "11px",
        color: "red",
        border: "1px solid red",
        padding: "0.5rem",
        marginTop: "0.5rem",
        textAlign: "center",
      }}
    >
      {error}
    </div>
  );
}

export default ErrorMessage;
