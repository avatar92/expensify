import React from 'react';
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem.js'
import getVisibleExpenses from '../selectors/expenses.js'
export const ExpenseList=({expenses})=>{
  console.log('props passed to ExpenseList',expenses)
  return(
  <div>
    {expenses.length===0?(
      <p>No Expenses</p>
    ):(
        expenses.map((expense)=>{
        return(
          <ExpenseListItem key={expense.id} {...expense}/>
        );
        })
      )
    }
  </div>
);}
const mapStateToProps=(state)=>{
  return {
    expenses:getVisibleExpenses(state.expenses,state.filter)
  };
};
export default connect(mapStateToProps)(ExpenseList);
