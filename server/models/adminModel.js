const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');

const UserSchema = new mongoose.Schema({
    
    username: String,
    password: String,
    secret: String
});
UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);
const register = mongoose.model('User', UserSchema);

module.exports = register;