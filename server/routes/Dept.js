const Deptroute = require('express').Router();
const Department = require('../models/deptModel');
Deptroute.post('/api/reacherDept', async (req, res)=>{
          try {
          const newDepartment = new Department({
                    deparmentName: req.body.deptname,
                    deparmentHead: req.body.deptname,
                    departmentArea: req.body.deptArea,
                    deparmentEmployment: req.body.empl
                    })    
                    // save
          const save = await newDepartment.save()
                    res.status(200).json(newDepartment);
          } catch (error) {
          console.log(error); 
          }

})
Deptroute.get('/api/reacherDepts', async (req, res)=>{
          console.log('hello');
         try{
             const reacherDept = await Department.find({});
             console.log(reacherDept)
             // save
             res.status(200).json(reacherDept)
         } catch (error) {
             res.json(error)
             
         }
})
Deptroute.put('/api/reacherDepts/:id', async (req, res)=>{
          console.log(req.params.id);
          try {
              const updateDept = await Department.findByIdAndUpdate(req.params.id, {$set: req.body});
              res.status(200).json("Update successfully");
          } catch (error) {
              res.json(error)
          }
})
Deptroute.delete('/api/reacherDepts/:_id', async (req,res)=>{
          console.log(req.params._id);
          
          try {
              const deleteItem = await Department.deleteOne({_id:req.params._id});
              res.status(200).json('Doctor deleted');
          } catch (error) {
              res.json(error)
          }
})
module.exports = Deptroute;