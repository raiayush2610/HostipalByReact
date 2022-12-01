require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const Regiter = require("./models/register");
const deptEntry = require("./models/deptModel");
const docEntry = require("./models/docModel");
const patientEntry = require("./models/patiModel");
const Adminroute = require("./routes/register");
const Patroute = require("./routes/patient");
const Docroute = require("./routes/doctor");
const DeptRoute = require("./routes/Dept");

const cors = require("cors");
const app = express();
app.use(cors({origin:'*'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());

app.use(cors({origin: '*'}))

mongoose.connect('mongodb://localhost:27017/doctorDetails')

.catch(err => console.log(err));
mongoose.createConnection(process.env.DB_CONN)
mongoose.createConnection(process.env.DB_DEP)
mongoose.createConnection(process.env.DB_PAT)

app.use('/', Adminroute);
app.use('/Pat',Patroute);
app.use('/Doc',Docroute)
app.use('/reacherDept',DeptRoute)


Port= 4000;
app.listen(Port, function(){
    console.log("Server is running on port  "+Port);
});
