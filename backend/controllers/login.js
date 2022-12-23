const User= require('../models/users')
exports.login=(req,res,next)=>{
    console.log(req.body);
    User.findAll({where:{email:req.body.email}}).then(
        users=>{
            console.log(users);

if(users[0]){
if(users[0].password===req.body.password){
    res.send({
        success:true,
        valid:"congratulations you are logged in successfully"
    })
}

else{
    res.status(401).send({
        success:false,
        valid:"incorrect password",
        status:401
    })
}


}else{
    res.status(404).send({
        success:false,
        valid:"user doesn't exists",
        status:404
    })
}

          
        }
    ).catch(err=>{console.log(err);})
}