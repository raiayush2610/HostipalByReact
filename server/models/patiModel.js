const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
          patientName:String,
          patientAge:Number,
          patientSex:String,
          patientDisease:String,
          patientEmail:String,
          patientNumber:Number

});



module.exports = mongoose.model("Patient",PatientSchema);