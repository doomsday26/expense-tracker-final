const express= require('express')
const app= express();
const cors= require('cors')
const bodyparser= require('body-parser')
const sequelize= require('./database')
app.use(bodyparser.json())
app.use(cors())
const Expense= require('./models/expense')
const User= require('./models/users')
const userControllers= require('./controllers/signup')
const loginController= require('./controllers/login')
const expenseRoutes= require('./routes/expenseRoute')
app.use('/expense',expenseRoutes)


app.post('/user/signup',userControllers.saveUser)
app.post('/user/login',loginController.login)

Expense.belongsTo(User,{constraints:true,onDelete:'CASCADE'}),
User.hasMany(Expense)
//{constraints:true,onDelete:'CASCADE'}


sequelize
.sync()
//sync({force:true})
.then(result=>{
    // console.log(result);
})
.catch(err=>{console.log(err);})



app.listen(3000,()=>{
    console.log("server is running onport 3000");
})