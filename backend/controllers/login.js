const User= require('../models/users')
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()
function generateToken(id,name){

   return jwt.sign({userId:id,userName:name},process.env.JWT_KEY)
}

exports.login=(req,res,next)=>{
    console.log(req.body);
    User.findAll({where:{email:req.body.email}}).then(
        users=>{
            console.log(users);
if(users[0]){

    let requserpass=req.body.password;
bcrypt.compare(requserpass,users[0].password,(err,bool)=>{

console.log("truth or false",bool);

if(bool){
    res.json({
        userdata:generateToken(users[0].id,users[0].name),
        success:true,
        valid:"congratulations you are logged in successfully"
    })
}
else{
    res.status(401).json({
        success:false,
        valid:"incorrect password",
    status:401
    })
}




})



}else{
    res.status(404).json({
        success:false,
        valid:"user doesn't exists",
       status:404
    })
}

          
        }
    ).catch(err=>{console.log(err);})
}