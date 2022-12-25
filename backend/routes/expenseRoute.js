const express= require('express')
const router= express.Router()
const expensecontroller= require('../controllers/expenses')
const authenticatecontroller= require('../controllers/authenticate')


router.get('/',authenticatecontroller.userAuthenticate,expensecontroller.getExpenses);
router.post('/',authenticatecontroller.userAuthenticate,expensecontroller.addExpense)
router.get('/:expenseId',expensecontroller.getOneExpense)
router.delete('/:expenseId',authenticatecontroller.userAuthenticate,expensecontroller.deleteExpense)
router.put('/:expenseId',expensecontroller.updateExpense)


module.exports= router