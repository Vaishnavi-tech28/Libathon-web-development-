import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Student");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role }),
    });

    const data = await response.json();

    if (data.success) {
      setUser({ username, role }); // Store user details
      navigate(data.redirect); // Redirect to student/staff page
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      
      <div>
        <button onClick={() => setRole("Student")} style={{ background: role === "Student" ? "blue" : "gray" }}>Student</button>
        <button onClick={() => setRole("Staff")} style={{ background: role === "Staff" ? "blue" : "gray" }}>Staff</button>
      </div>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
