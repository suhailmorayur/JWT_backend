const Signup = require("../model/signupModel")
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt');

const login = async (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    const user = await Signup.findOne({email:email})

    if(!user){
        return res.status(401).send("user note found")

    }

    const match =bcrypt.compareSync(password, user.password)
    if(!match){
        return res.status(401).send("invalid password")

    }

    const token = jwt.sign({ email:user.email , name:user.name , id_:user._id }, process.env.JWT_SECRET_KEY);
res.cookie('token',token ,{httpOnly:true,secure:true, maxAge:24*60*60*1000})

res.send("loging success")
}

module.exports= login