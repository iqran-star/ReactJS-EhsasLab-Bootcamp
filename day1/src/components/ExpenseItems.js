import "../components/ExpenseItem.css"
const ExpenseItems = () => {
    const expenseDate= new Date()
    const expenseTitle="Car Insurance"
    const expensePrice = "234"
    
    return (
        <div className="expense-item">
           <div>
               Date: {expenseDate.toISOString()}
           </div>
           <div className="expense-item__description">
               <h2>{expenseTitle}</h2>
               <div className="expense-item__price">
                   ${expensePrice}
               </div>
           </div>
        </div>
    )
}

export default ExpenseItems
