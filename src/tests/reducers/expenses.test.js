import expensesReducer from '../../reducers/expences.js'; 
import expenses from '../fixture/expenses.js';


test('should set default state',()=>{
  const state=expensesReducer(undefined,{type:"@@INIT"});
  expect(state).toEqual([])
});
test('should remove an expense by id',()=>{
  const action={
    type:'REMOVE_ID',
    id:'2'
  };
  const state=expensesReducer(expenses,action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});
test('should not remove an expense if id found',()=>{
  const action={
    type:'REMOVE_ID',
    id:'32564'
  };
  const state=expensesReducer(expenses,action);
  expect(state).toEqual(expenses);
});
test('should add an expense',()=>{
  const action={
    type:"ADD_EXPENSE",
    expense:{
      description:'hello',
      amount:12
    }
  };
  const state=expensesReducer(expenses,action);
  expect(state).toEqual([expenses[0],expenses[1],expenses[2],action.expense])
});
test('should edit an expense',()=>{
  const action={
    type:"EDIT_EXPENSE",
    id:'2',
    updates:{
      description:'hello',
      amount:12,
      note:'',
      createdAt:0
    }
  };
  const state=expensesReducer(expenses,action);
  expect(state).toEqual([expenses[0],{id:'2',description:'hello',amount:12,note:'',createdAt:0},expenses[2]]);
});
test('should not edit an expense if id is wrong',()=>{
  const action={
    type:"EDIT_EXPENSE",
    id:'-1',
    updates:{
      description:'hello',
      amount:12,
      note:'',
      createdAt:0
    }
  };
  const state=expensesReducer(expenses,action);
  expect(state).toEqual(expenses);
});