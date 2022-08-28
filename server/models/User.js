const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    jobtitle: String,
    phone: Number,
    password: String,
})

const UserModel = mongoose.model("everuser", userSchema);

module.exports = UserModel;