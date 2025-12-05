import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {

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
        <h1>Dashboard Page</h1>
        <p>This is the main content for my Final Project for ITIS 5166</p>

        <h2>Recent Innovations in Healthcare</h2>
        <div>

        </div>
        <p>
          Some of the top innovations occurring in healthcare within the last 6 months
           include a multitude of new technology usage into the healthcare system, including
            AI powered diagnostics, medical wearables, robotics for minimally invasive 
            surgeries, and AR based medical training. AI is beginning to be used in a variety
            of new regions in healthcare, including aforementioned diagnostics and drug
            discovery. AI can be used to improve the accuracy of clinical trials, which can 
            help develop new medications more efficiently. It is also being used in the
            diagnosing process through machine learning, where computers can help to detect
            illnesses more accurately and earlier overall improving patient outcomes. 
            Robotics are being used in surgeries to enhance control and precision for 
            surgeons, overall making surgeries less invasive and decreasing surgical risks.
            Outside of the technological realm, the healthcare industry is also making leaps 
            and bounds towards vaccine development and mRNA development. mRNA is currently
            being developed for more personalized cancer treatments as well as flu, COVID, 
            and other vaccines. On a more ethically concerning note, the genetics field of 
            healthcare is working towards developing a cure for genetically inherited diseases 
            through gene editing. This could be a cause for concern in the future for risk of 
            these innovations not being used for their intended purpose, as well as the potential
             for other unintended genetic changes during use. 
        </p>
        <br></br>
        <h3> <a href="https://www.idaireland.com/latest-news/insights/top-medical-innovations-transforming-healthcare-in-2025" target="_blank">Website</a></h3>
      </div>
    </div>
  );
}
