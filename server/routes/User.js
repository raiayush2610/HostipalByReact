const approuter = require('express').Router();
const bcrypt = require("bcrypt");
const User = require('../models/adminModel');
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const { application } = require('express');

const jwt = require('jsonwebtoken')

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
          User.findById(id, function(err, user) {
            done(err, user);
            console.log("error"+err);
            console.log("user"+user);
          });
});
approuter.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));
approuter.post("/register",function(req,res){
          User.register({username :  req.body.username },req.body.password,function(err,user){
            if(err){
              res.json(err);

            }else{
              console.log(user.username);

              passport.authenticate(jwt)(req, res, function(){
                res.json("secrets");
              });
            }
          })
          
})
approuter.post("/adminLogin",function(req,res){
  const user = new User({
    username:req.body.username,
    password:req.body.password
  });
  
  req.login(user,function(err){
    if (err){
      res.json(err);
    }else{
      
      passport.authenticate(jwt)(req, res, function(){
        res.json("hello");
      });
    }
  });

});
module.exports = approuter;