import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import {editExpense,startRemoveId} from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit=(expense)=>{
    this.props.editExpense(this.props.expense.id,expense);
    this.props.history.push('/');
  }
  onRemove=()=>{
    this.props.startRemoveId(this.props.expense.id);
    this.props.history.push('/');
  }
  render() { 
    return (
      <div>
        <ExpenseForm 
        expense={this.props.expense} 
        onSubmit={this.onSubmit}/>
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}
 

const mapDispatchToProps=(dispatch,props)=>{
  return{
    editExpense:(id,expense)=>dispatch(editExpense(id,expense)),
    startRemoveId:(id)=>dispatch(startRemoveId(id))
  };
}

const mapStateToProps=(state,props)=>{
  return{ 
    expense:state.expenses.find((expense)=>expense.id===props.match.params.id)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage); 