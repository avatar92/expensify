import {addExpense,removeId,editExpense} from '../../actions/expenses.js'; 
import uuid from 'uuid';
test('Should remove an Expense',()=>{
  const action=removeId('123abc');
  expect(action).toEqual({
    type:'REMOVE_ID',
    id:'123abc'
  })
});

test('Should Edit an Expense',()=>{
  const action=editExpense('123abc',{description:'coffe',amount:0});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'123abc',
    updates:{
      description:'coffe',
      amount:0
    }
  });
});
test('Should setup Add Expense with provided object value',()=>{
  const action=addExpense({
    description:'coffe',
    note:'',
    amount:100,
    createdAt:100
  });
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      id:expect.any(String),
      description:'coffe',
      note:'',
      amount:100,
      createdAt:100
    }
  });
});
test('Should setup Add Expense with default object value',()=>{
  const action=addExpense();
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      id:expect.any(String),
      description:'',
      note:'',
      amount:0,
      createdAt:0
    }
  });
});