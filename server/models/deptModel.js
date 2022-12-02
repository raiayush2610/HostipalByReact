const mongoose = require("mongoose");

const DepartmentSchema = new  mongoose.Schema({
          departmentName: String,
          departmentHead: String,
          departmentArea:String,
          departmentEmployment: Number,
          departmentphoneno: Number,
          DepartmentOpeningtime: String,
          DepartmentClosingtime: String

});

module.exports = mongoose.model("Department",DepartmentSchema);