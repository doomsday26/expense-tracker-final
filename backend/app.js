const express= require('express')
const app= express();
const cors= require('cors')
const bodyparser= require('body-parser')
const sequelize= require('./database')
app.use(bodyparser.json())
app.use(cors())
const Expense= require('./models/expense')
const Order= require('./models/orders')
const User= require('./models/users')

const userControllers= require('./controllers/signup')
const loginRoutes=require('./routes/login')
const expenseRoutes= require('./routes/expenseRoute')
const purchaseRoutes=require('./routes/purchase');
const forgotPassReq = require('./models/forgotPass');
app.use('/expense',expenseRoutes)
app.use('/purchase',purchaseRoutes)

app.use(loginRoutes)
app.post('/user/signup',userControllers.saveUser)



Expense.belongsTo(User,{constraints:true,onDelete:'CASCADE'}),
User.hasMany(Expense)
//{constraints:true,onDelete:'CASCADE'}

Order.belongsTo(User)
User.hasMany(Order)

forgotPassReq.belongsTo(User)
User.hasMany(forgotPassReq)



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

//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  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