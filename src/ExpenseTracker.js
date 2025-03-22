import React, { useState } from 'react';
import {  } from "./ExpenseTracker.css";

export const ExpenseTracker = () => {
  const [Input,setInput]=useState('')
  const [Amount,setAmount]=useState('')
  const [expenses,setExpenses]=useState([])

  const addExpense = () =>{
    if (!Input || !Amount) 
      return;

    const newExpense = {
      id: expenses.length+1,
      title : Input ,
      Amount : Amount
    };
    setExpenses([...expenses,newExpense])
    setInput('')
    setAmount('')
  } 
  const deleteExpense = (id) => {
    setExpenses(expenses.filter 
      ((expenses) => expenses.id 
      !==id
    ))
  }
   return (
    <div>
       <h2> ExpenseTracker </h2>
       <div>
        <input type='text'
        placeholder='Expense'
        value={Input}
        onChange={(e) => setInput(e.target.value)}
        />
        <input type='number'
        placeholder='Amount'
        value={Amount}
        onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
       </div>  
       <ul className='expense-list'>
       {
        expenses.map((Expense) => (
         <li key={Expense.id} >
        <span>{Expense.title}</span>
        <span>{Expense.Amount}</span>

        <button onClick={()=>deleteExpense(Expense.id)}>Delete</button>

         </li>
        ))
       }
       </ul>
        </div>
  )
}
export default ExpenseTracker;