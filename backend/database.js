const Sequelize= require('sequelize')
const sequelize= new Sequelize('expense-final','root','harsh226748',{
    host:'localhost',
    dialect:'mysql'
})
module.exports= sequelize;