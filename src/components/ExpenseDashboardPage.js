import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary.js';

const ExpenseDashboardPage=()=>(
  <div>
    <ExpensesSummary/>
    <ExpenseListFilter/>
    <ExpenseList/> 
  </div>
);



export default ExpenseDashboardPage;