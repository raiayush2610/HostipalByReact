const docrouter = require('express').Router();

const Doctor = require('../models/docModel');

docrouter.post('/doctor', async (req, res)=>{
   
          try {
            console.log("doct port is working");
           
          const newDoctor = new Doctor({
                    docName: req.body.doctorName,
                    docSpecilization: req.body.doctorSpecilization,
                    Year: req.body.YearofExperienc,
                    docEmail: req.body.doctorEmail,
                    docNumber: req.body.doctorNumber,
                    docplace: req.body.place
                    })    
                    // save
          const save = await newDoctor.save()
                   console.log(newDoctor);
          } catch (error) {
          console.log("feff"+error); 
          }

})
docrouter.get('/api/doctors', async (req, res)=>{
          console.log('doctor get request is working');
         try {
            const doctor = await Doctor.find({});
            res.status(200).json(doctor)
         } catch (error) {
            res.json(error)
         }
            
         
})
docrouter.put('/api/doctors/:id', async (req, res)=>{
          console.log(req.params.id);
          try {
              const updateDept = await Doctor.findByIdAndUpdate(req.params.id, {$set: req.body});
              res.status(200).json("Update successfully");
          } catch (error) {
              res.json(error)
          }
})
docrouter.delete('/api/doctors/:_id', async (req,res)=>{
          console.log(req.params._id);
          console.log("doctor delete route is working");
          
          try {
              const deleteItem = await Doctor.deleteOne({_id:req.params._id});
              res.status(200).json('Doctor deleted');
          } catch (error) {
              res.json(error)
          }
})
module.exports = docrouter;