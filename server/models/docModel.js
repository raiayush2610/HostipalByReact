const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
          docName : String,
          docSpecilization :String, 
          Year:Number,
          docEmail :String,
          docNumber :Number,
          docplace : String

});

module.exports = mongoose.model("Doctor",DoctorSchema);