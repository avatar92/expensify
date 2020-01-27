import uuid from 'uuid';

export const addExpense=(
  {
    description='',
    note='',
    amount=0,
    createdAt=0
  }={}
  )=>({
  type:'ADD_EXPENSE',
  expense:{
    id:uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const removeId=(id)=>({
  type:'REMOVE_ID',
  id,
});

export const editExpense=(id,updates)=>({
  type:"EDIT_EXPENSE",
  id,
  updates
});