const express= require('express')
const router= express.Router()
const expensecontroller= require('../controllers/expenses')



router.get('/',expensecontroller.getExpenses);
router.post('/',expensecontroller.addExpense)
router.get('/:expenseId',expensecontroller.getOneExpense)
router.delete('/:expenseId',expensecontroller.deleteExpense)
router.put('/:expenseId',expensecontroller.updateExpense)


module.exports= router