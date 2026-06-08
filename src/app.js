const express = require("express");
const { connectDB } = require("./config/database");
const { User } = require("./models/user");

const app = express();

app.post("/signup", async(req, res) => {
    // Create a new instance of new user model
    const user = new User({
      firstName: "Jatin2",
      lastName: "Sonkusale",
      emailId: "email@gmail.com",
      password: "password",
      _id: "6a27097685b3b221e06034be",
    });

    await user.save()
        .then(() => {
        res.send("User created successfully");
    })
    .catch((err) => {
        res.status(400).send("Error creating user");
    })

})

connectDB().then(() => {
    console.log("Connected to MongoDB");
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    })
}).catch((err) => {
    console.log(err,"Error connecting to MongoDB");
})