const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
      "mongodb+srv://jatins_db_user:newpassword@cluster0.fgrrpm2.mongodb.net/devTinder",
    );
}

module.exports = {
    connectDB
}

