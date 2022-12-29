const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');

const registerSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password: String,
    secret: String
});
registerSchema.plugin(passportLocalMongoose);
registerSchema.plugin(findOrCreate);
const register = mongoose.model('Register', registerSchema);

module.exports = register;