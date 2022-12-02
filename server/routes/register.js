const router = require('express').Router();
const bcrypt = require("bcrypt");
const register = require('../models/register');

// Insert item
router.post('/api/entry', async (req, res)=>{
    try{
        const plainPassword = req.body.password;
        const hashPassword = bcrypt.hashSync(plainPassword, 7);
        const newItem = new register({
            fName: req.body.fName,
            lName: req.body.lName,
            email: req.body.email,
            password: hashPassword
        })
        // save
        const save = await newItem.save()
        console.log(newItem);

        res.status(200).json(newItem);
    } catch (error) {
        res.json(error)
        
    }
})

router.post("/api/entries", async (req, res) => {
    try {
        const reqEmail = req.body.email;
        const reqPassword = req.body.password;
        // console.log(reqEmail);
        const item = await register.findOne({email: reqEmail});
        if(item === null){
            res.json("no")
        }else{
        const savePassword = item.password;
        if(bcrypt.compareSync(reqPassword, savePassword) === true){
                res.status(200).json(reqEmail)
        }else if(bcrypt.compareSync(reqPassword, savePassword) === false){
            res.json("false");
        }
    }
        
    } catch (error) {
        res.json(error);
    }
})


router.delete("/api/entry/:_id", async(req, res) => {
    try {
        console.log(req.params._id);
        const deleteItem = await register.deleteOne({_id:req.params._id});
        res.status(200).json('Item deleted');
    } catch (error) {
        res.json(error);
    }
})

router.get("/api/entries", async(req, res) => {
    try {
        const entries = await register.find({})
        res.status(200).json(entries);
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;
