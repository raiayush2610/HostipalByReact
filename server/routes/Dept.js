const Deptroute = require('express').Router();
const Department = require('../models/deptModel');
Deptroute.post('/api/reacherDept', async (req, res)=>{
          try {
            
           

          const newDepartment = new Department({
                    departmentName: req.body.name,
                    departmentHead: req.body.head,
                    departmentArea: req.body.Area,
                    departmentEmployment: req.body.Enploy,
                    departmentphoneno:req.body.Phoneno,
                    DepartmentOpeningtime:req.body.Opentime,
                    DepartmentClosingtime:req.body.Closingtime,
                    })    
                    // save
          const save = await newDepartment.save()
                    res.status(200).json(newDepartment);
                    console.log(newDepartment);
          } catch (error) {
          console.log(error); 
          }

})
Deptroute.get('/api/reacherDepts', async (req, res)=>{
        
         try{
             const reacherDept = await Department.find({});
             res.status(200).json(reacherDept)
         } catch (error) {
             res.json(error)
             
         }
})
Deptroute.put('/api/reacherDepts/:id', async (req, res)=>{
        
          try {
              const updateDept = await Department.findByIdAndUpdate(req.params.id, {$set: req.body});
              res.status(200).json("Update successfully");
          } catch (error) {
              res.json(error)
          }
})
Deptroute.get('/dept/:place',async(req,res)=>{
   
    const place = req.params.place
    console.log(place);
    try {
        let query =await Department.find({departmentArea: place})
        if (query === null) {
            res.json("Empty")
        } else {
            res.json(query)
        }
    } catch (error) {
        console.log(error);
    }
})
Deptroute.delete('/api/reacherDepts/:_id', async (req,res)=>{
        //   console.log(req.params._id);
          console.log("Deptament delete route is working");
          try {
              const deleteItem = await Department.deleteOne({_id:req.params._id});
              res.status(200).json('Doctor deleted');
          } catch (error) {
              res.json(error)
          }
})
module.exports = Deptroute;