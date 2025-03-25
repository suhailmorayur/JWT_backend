
const express = require('express')
const Singup = require('../model/singupModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const singup = async(req, res) => {
try{
const userDeatails = req.body
const hash =bcrypt.hashSync(req.body.password, saltRounds)
const newUser= new Singup({
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
  singup