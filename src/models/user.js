const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    lastName: {
        type: String,
        trim: true,
    },
    emailId: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate(value) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                throw new Error("Invalid email format");
            }
        },
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (value.length < 8) {
                throw new Error("Password must be at least 8 characters");
            }
        },
    },
    age: {
        type: Number,
        min: 18,
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: "{VALUE} is not a valid gender",
        },
    },
})

const User = mongoose.model(
    "User",
    userSchema
)

module.exports = {
    User
}