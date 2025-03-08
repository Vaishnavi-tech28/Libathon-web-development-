const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Read user credentials from data.json
const getUserData = () => {
    try {
        const data = fs.readFileSync("data.json", "utf8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading user data:", err);
        return { students: [], staff: [] };
    }
};

// Login API
app.post("/login", (req, res) => {
    const { username, password, role } = req.body;
    const users = getUserData();

    if (role === "student") {
        const student = users.students.find(u => u.username === username && u.password === password);
        if (student) {
            return res.json({ success: true });
        }
    } else if (role === "staff") {
        const staff = users.staff.find(u => u.username === username && u.password === password);
        if (staff) {
            return res.json({ success: true });
        }
    }

    res.json({ success: false, message: "Invalid username or password" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
