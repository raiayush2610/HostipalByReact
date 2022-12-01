const Patroute = require('express').Router();
const Patient = require('../models/patiModel');

Patroute.post('/Patient', async (req, res)=>{
          try {
            console.log("Patient port is working");
            console.log(req.body.patBlood);
          const newPatient = new Patient({
                    patientName: req.body.patName,
                    patientAge: req.body.patAge,
                    patientSex: req.body.patSex,
                    patientDisease: req.body.patDisease,
                    patientEmail: req.body.patEmail,
                    patientBlood: req.body.patBlood,
                    patientNumber: req.body.patNumber,
                    patientPlace: req.body.place 
                    })    
                    // save
          const save = await newPatient.save()
                    res.status(200).json(newPatient);
                    console.log(newPatient);
          } catch (error) {
          console.log(error); 
          }

})
Patroute.get('/Patients', async (req, res)=>{
          
         try{
            console.log('hello');
             const reqPatient = await Patient.find({ });
             res.json(reqPatient)
             // save
            
         } catch (error) {
             res.json(error)
             
         }
})
Patroute.put('/api/Patients/:id', async (req, res)=>{
          console.log(req.params.id);
          try {
              const updateDept = await Patient.findByIdAndUpdate(req.params.id, {$set: req.body});
              res.status(200).json("Update successfully");
          } catch (error) {
              res.json(error)
          }
})
Patroute.delete('/api/Patients/:_id', async (req,res)=>{
          console.log(req.params._id);
          
          try {
              const deleteItem = await Patient.deleteOne({_id:req.params._id});
              res.status(200).json('Patient deleted');
          } catch (error) {
              res.json(error)
          }
})
module.exports = Patroute;