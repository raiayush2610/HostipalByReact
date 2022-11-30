const Patroute = require('express').Router();
const Patient = require('../models/patiModel');

Patroute.post('/api/Patient', async (req, res)=>{
          try {
          const newPatient = new Patient({
                    patientName: req.body.patName,
                    patientAge: req.body.patAge,
                    patientSex: req.body.patSex,
                    patientDisease: req.body.patDisease,
                    patientEmail: req.body.patEmail,
                    patientNumber: req.body.patNumber 
                    })    
                    // save
          const save = await newPatient.save()
                    res.status(200).json(newPatient);
          } catch (error) {
          console.log(error); 
          }

})
Patroute.get('/api/Patients', async (req, res)=>{
          console.log('hello');
         try{
             const Patient = await Patient.find({});
             console.log(Patient)
             // save
             res.status(200).json(Patient)
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