import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = ({ title, amount, date }) => {
    useState({ title })
    const clickHandler= () => {
        console.log('Clicked')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'></div>
            <h2>{title}</h2>
            <div className='expense-item__price'>${amount}</div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem