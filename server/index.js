require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const entry = require("./models/register");
const entry2 = require("./models/deptModel");
const entry3 = require("./models/docModel");
const entry4 = require("./models/patiModel");
const Adminroute = require("./routes/register");
const Patroute = require("./routes/patient");
const Docroute = require("./routes/doctor");
const DeptRoute = require("./routes/Dept");

const cors = require("cors");
const app = express();
app.use(cors({origin:'*'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());

app.use('/', Adminroute);
app.use('/Pat',Patroute);
app.use('/Doc',Docroute)
app.use('/reacherDept',DeptRoute)
console.log("464");
var con1= mongoose.createConnection(process.env.DB_DOC)
var con2=mongoose.createConnection(process.env.DB_CONN)
var con3 = mongoose.createConnection(process.env.DB_DEP)
var con4 =mongoose.createConnection(process.env.DB_PAT)
const Doc= con1.entry3
const Regi=con2.entry
const pat=con4.entry4
const Dept=con3.entry2



app.listen(4000, function(){
    console.log("Server is running on port 2000");
});
