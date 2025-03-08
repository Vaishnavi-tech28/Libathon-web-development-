import React, { useState } from "react";

function Staff() {
  const [message, setMessage] = useState("Welcome to the staff dashboard");

  const updateMessage = () => {
    setMessage("You have updated the dashboard!");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Staff Dashboard</h2>
      <p>{message}</p>
      <button onClick={updateMessage}>Update Dashboard</button>
    </div>
  );
}

export default Staff;
