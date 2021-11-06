import './ExpenseItem.css'
function ExpenseItem({title, amount, date}) {
    const month = date.toLocaleString('en-US', { month: 'long'})
    const day = date.toLocaleString('en-US', { month: '2-digit'})
    const year = date.getFullYear()


    return (
        <div className='expense-item'>
            <div>{month} </div>
            <div>{day}</div>
            <div>{year}</div>
            <div className='expense-item__description'></div>
            <h2>{title}</h2>
            <div className='expense-item__price'>${amount}</div>
        </div>)
}

export default ExpenseItem