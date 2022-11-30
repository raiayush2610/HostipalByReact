const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
          doctorName :String,
          doctorSpecilization :String, 
          YearofExperience :Number,
          doctorEmail :String,
          doctorNumber :Number,
          place :String

});

module.exports = mongoose.model("Doctor",DoctorSchema);