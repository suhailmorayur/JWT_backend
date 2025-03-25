
const express = require('express')
const bcrypt = require('bcrypt');
const Signup = require('../model/signupModel');
const saltRounds = 10;

const signup = async(req, res) => {
try{
const userDeatails = req.body
const hash =bcrypt.hashSync(req.body.password, saltRounds)
const newUser= new Signup({
    ...userDeatails,
    password:hash
})
await newUser.save()
res.json(newUser)

}
catch (error){
res.send(error)
}
}



  module.exports =
  signup