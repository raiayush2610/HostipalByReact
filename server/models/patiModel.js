const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
          patientName:String,
          patientAge:Number,
          patientSex:String,
          patientDisease:String,
          patientBlood:String,
          patientEmail:String,
          patientNumber:Number,
          patientPlace:String

});



module.exports = mongoose.model("Patient",PatientSchema);