import React from "react";
import { FaXingSquare } from "react-icons/fa";
function ErrorMessage({ error }) {
  return (
    <div style={{ margin: "0.5rem", fontSize: "11px", color: "red" }}>
      {error}
    </div>
  );
}

export default ErrorMessage;
