const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = 5000;
const SECRET_KEY = "mysecret123";

app.use(cors());
app.use(bodyParser.json());

// In-memory users storage
let users = [];

// Signup route
app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" });
    }

    // check if user exists
    if (users.find(u => u.username === username)) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user with unique id
    const newUser = { id: users.length + 1, username, password: hashedPassword };
    users.push(newUser); // ✅ add user to array

    // generate token
    const token = jwt.sign({ username: newUser.username, id: newUser.id }, SECRET_KEY, { expiresIn: "1h" });

    // return user + token
    res.status(201).json({ user: { id: newUser.id, username: newUser.username }, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ username: user.username, id: user.id }, SECRET_KEY, { expiresIn: "1h" });

    res.json({ token, user: { id: user.id, username: user.username } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
