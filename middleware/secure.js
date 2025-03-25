const express = require('express')

const jwt = require('jsonwebtoken');


 
 const secure =(req,res,next)=>{
    const token =req.cookies.token
    if(!token){
        return res.status(401).send("unAthorized")
    }

    try{
const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
console.log(decoded)
next()

    }
catch(error){
return res.status(401).send("unauthorized")
} 
}

module.exports= secure