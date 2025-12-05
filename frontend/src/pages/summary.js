import React from "react";
import { Link } from "react-router-dom";

export default function Summary() {
  return (
    <div>
      <nav style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
        padding: "10px",
        backgroundColor: "#f0f0f0",
        borderBottom: "1px solid #ccc"
      }}>
        <Link to="/" style={{ textDecoration: "none" }}>Dashboard</Link>
        <Link to="/reports" style={{ textDecoration: "none" }}>Reports</Link>
        <Link to="/summary" style={{ textDecoration: "none" }}>Summary</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <h1>Summary Page</h1>
        <p>content</p>
      </div>
    </div>
  );
}