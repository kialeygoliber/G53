import React from "react";
import { Link } from "react-router-dom";
import BarChart from "../components/BarChart";
import axios from "axios";

export default function Reports() {
  const handleLogout = () => {
      localStorage.removeItem("token"); 
      window.location.href = "/login";   
    };
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
        <nav> 
          <div>
            <Link to="/" style={{ textDecoration: "none", marginRight: "15px"}}> Dashboard </Link>
            <Link to="/reports" style={{ textDecoration: "none", marginRight: "15px"}}> Reports </Link>
            <Link to="/summary" style={{ textDecoration: "none", marginRight: "15px" }}> Summary </Link>
          </div> 
        </nav>
        
        <button onClick={handleLogout}>Logout</button>
        </nav>
  
        <div style={{ padding: "20px" }}>
        <h1>Reports Page</h1>
        <div style={{ padding: "20px" }}>
              <BarChart height={500} width={600} />
              <p>This bar chart shows the proportion of healthcare innovations introduced in the last 6 months. Data source: simulated.</p>
            </div>
        
      </div>
    </div>
  );
}