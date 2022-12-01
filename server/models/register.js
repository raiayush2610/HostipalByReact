const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password: String
});

const register = mongoose.model('Register', registerSchema);

module.exports = register;