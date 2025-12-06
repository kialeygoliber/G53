import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PieChart from "../components/PieChart";
import axios from "axios";
import { API_URL } from "../config";

export default function Summary() {
  const handleLogout = () => {
      localStorage.removeItem("token"); 
      window.location.href = "/login";   
    };

  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${API_URL}/pie_data`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);
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
      
      <h1>Summary Page</h1>
      <div style={{ padding: "20px" }}>
      <PieChart width={600} />
      <p>This pie chart shows the proportion of healthcare innovations introduced in the last 6 months. Data source: simulated.</p>
    </div>
  </div>
  );
}