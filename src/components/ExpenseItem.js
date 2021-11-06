import './ExpenseItem.css'
function ExpenseItem({title, amount, date}) {
    return (
        <div className='expense-item'>
            <div className='expense-item__description'>{date.toISOString()}</div>
            <h2>{title}</h2>
            <div className='expense-item__price'>${amount}</div>
        </div>)
}

export default ExpenseItem