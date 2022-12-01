const mongoose = require("mongoose");

const DeparmentSchema = new  mongoose.Schema({
          deparmentName: String,
          deparmentHead: String,
          departmentArea:String,
          deparmentEmployment: Number,
          deparmentphoneno: Number,
          DepartmentOpeningtime: String,
          DepartmentClosingtime: String

});

module.exports = mongoose.model("Department",DeparmentSchema);