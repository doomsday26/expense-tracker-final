const express= require('express')
const app= express();
const cors= require('cors')
const bodyparser= require('body-parser')
const sequelize= require('./database')
app.use(bodyparser.json())
app.use(cors())
const User= require('./models/users')
const userControllers= require('./controllers/signup')
const loginController= require('./controllers/login')
app.post('/user/signup',userControllers.saveUser)
app.post('/user/login',loginController.login)



sequelize
.sync()
//.sync({force:true})
.then(result=>{
    // console.log(result);
})
.catch(err=>{console.log(err);})



app.listen(3000,()=>{
    console.log("server is running onport 3000");
})