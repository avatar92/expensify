import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilter from './ExpenseListFilter'
const ExpenseDashboardPage=()=>(
  <div>
    <ExpenseListFilter/>
    <ExpenseList/> 
  </div>
);



export default ExpenseDashboardPage;