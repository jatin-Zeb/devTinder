const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");

const app = express();

app.use(express.json())

app.post("/signup", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send("User created successfully");
    } catch (err) {
        if (err.name === "ValidationError") {
            const errors = Object.values(err.errors).map((e) => e.message);
            return res.status(400).json({ errors });
        }

        if (err.code === 11000) {
            return res.status(400).json({ errors: ["Email already exists"] });
        }

        res.status(500).send("Something went wrong");
    }
})

connectDB().then(() => {
    console.log("Connected to MongoDB");
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    })
}).catch((err) => {
    console.log(err,"Error connecting to MongoDB");
})