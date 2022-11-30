const mongoose = require("mongoose");

const DeparmentSchema = new  mongoose.Schema({
          deparmentName: String,
          deparmentHead: String,
          departmentArea:String,
          deparmentEmployment: Number

});

module.exports = mongoose.model("Department",DeparmentSchema);