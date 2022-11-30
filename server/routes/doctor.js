const Docroute = require('express').Router();

const Doctor = require('../models/docModel');
Docroute.post('/api/doctor', async (req, res)=>{
          try {
          const newDoctor = new Doctor({
                    doctorName: req.body.dname,
                    doctorSpecilization: req.body.spec,
                    YearofExperience: req.body.year,
                    doctorEmail: req.body.demail,
                    doctorNumber: req.body.dnumber
                    })    
                    // save
          const save = await newDoctor.save()
                    res.status(200).json(newDoctor);
          } catch (error) {
          console.log(error); 
          }

})
Docroute.get('/api/doctors', async (req, res)=>{
          console.log('hello');
         try{
             const doctor = await Doctor.find({});
             console.log(doctor)
             // save
             res.status(200).json(doctor)
         } catch (error) {
             res.json(error)
             
         }
})
Docroute.put('/api/doctors/:id', async (req, res)=>{
          console.log(req.params.id);
          try {
              const updateDept = await Doctor.findByIdAndUpdate(req.params.id, {$set: req.body});
              res.status(200).json("Update successfully");
          } catch (error) {
              res.json(error)
          }
})
Docroute.delete('/api/doctors/:_id', async (req,res)=>{
          console.log(req.params._id);
          
          try {
              const deleteItem = await Doctor.deleteOne({_id:req.params._id});
              res.status(200).json('Doctor deleted');
          } catch (error) {
              res.json(error)
          }
})
module.exports = Docroute;