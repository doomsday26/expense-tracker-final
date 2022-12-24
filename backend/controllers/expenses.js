const Expense= require('../models/expense')
//controllers
exports.getExpenses=(req,res,next)=>{
    Expense.findAll().then(expenses=>{
        res.send(expenses)
    }).catch(err=>{
        console.log(err);
    })
}

exports.addExpense=(req,res,next)=>{
Expense.create({"ammount":req.body.ammount, "category":req.body.category,"description": req.body.description}).then(result=>{
    res.send(result)
}).catch(err=>{
    console.log(err);
})
}

exports.getOneExpense=(req,res,next)=>{
    let id = req.params.expenseId;
    Expense.findByPk(id).then(result=>{console.log(result);res.json(result)}).catch(err=>{console.log(err);})
   
}

exports.deleteExpense=(req,res,next)=>{
let id=req.params.expenseId;
Expense.findByPk(id).then(expense=>{
    return expense.destroy();
}).then(result=>{
    res.send(result)
}).catch(err=>{
    console.log(err);
    res.send(err)
})

}

exports.updateExpense=(req,res,next)=>{
    let id = req.params.expenseId;
Expense.findByPk(id).then(expense=>{
    expense.ammount=req.body.ammount,
    expense.description=req.body.description
    expense.category=req.body.category
    return expense.save()
}).then(result=>{
    res.send(result)
}).catch(err=>{
    console.log(err);
    res.err()
})

}



//{"ammount":ammount.value, "category":category.value,"description": description.value}