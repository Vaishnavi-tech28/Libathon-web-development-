import React, { useState } from "react";

const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      maxWidth: "1000px",
      margin: "auto",
      padding: "20px",
      gap: "20px"
    }}>
      {/* Left Side - Text Content */}
      <div style={{ flex: 1 }}>
        <h2>About Us</h2>
        <p>
          We are dedicated to providing the best resources for students, 
          researchers, and professionals. Our platform offers a vast collection 
          of books, journals, and digital materials.
        </p>
        {expanded && (
          <p>
            Our mission is to bridge the gap between knowledge and learners by 
            offering high-quality resources accessible anytime, anywhere. Join 
            us on our journey to make education more engaging and effective.
          </p>
        )}
        <button 
          onClick={() => setExpanded(!expanded)} 
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            background: "#405b97",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Right Side - Image Gallery */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
        <img src="https://via.placeholder.com/300" alt="Library" style={{ width: "100%", borderRadius: "8px" }} />
        <img src="https://via.placeholder.com/300" alt="Students" style={{ width: "100%", borderRadius: "8px" }} />
      </div>
    </div>
  );
};

export default AboutUs;
