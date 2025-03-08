const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.static("public"));

// Read user credentials from data.json
const dataPath = path.join(__dirname, "public", "data.json");

const getUserData = () => {
    try {
        const data = fs.readFileSync(dataPath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading data.json:", error);
        return { students: [], staff: [] }; // Return empty data if file read fails
    }
};

// Login API
app.post("/login", (req, res) => {
    const { username, password, role } = req.body;
    const users = getUserData();

    console.log(`Login attempt - User: ${username}, Role: ${role}`);

    if (role === "student") {
        const student = users.students.find(u => u.username === username && u.password === password);
        if (student) {
            console.log("✅ Student authenticated");
            return res.json({ success: true, redirect: "student.html" });
        }
    } else if (role === "staff") {
        const staff = users.staff.find(u => u.username === username && u.password === password);
        if (staff) {
            console.log("✅ Staff authenticated");
            return res.json({ success: true, redirect: "staffdashboard.html" });
        }
    }

    console.log("❌ Invalid credentials");
    res.json({ success: false, message: "Invalid username or password" });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
