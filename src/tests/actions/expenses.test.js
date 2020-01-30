import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense,addExpense,removeId,editExpense,setExpenses,startSetExpense} from '../../actions/expenses.js';
import expenses from '../fixture/expenses';
import database from '../../firebase/firebase.js';
const createMockStore=configureMockStore([thunk]);


beforeEach((done)=>{
  const expensesData={};
  expenses.forEach(({ id,description,note,amount,createdAt })=>{
    expensesData[id]={description,note,amount,createdAt}
  })
  database.ref('expenses').set(expensesData).then(() => done());
})

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
  const action=addExpense(expenses[2]);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:expenses[2]
  });
});

test('Should add expense to database and store',(done)=>{
  const store=createMockStore({});
  const expenseData={
    description:'Mouse',
    amount:30,
    note:'this one is better',
    createdAt:1000
  }
  store.dispatch(startAddExpense(expenseData)).then(()=>{
    const actions=store.getActions();
    expect(actions[0]).toEqual({
      type:"ADD_EXPENSE",
      expense:{
        id:expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((sanapshot)=>{
    expect(sanapshot.val()).toEqual(expenseData);
    done();
  });

});

test('should add expense with default to database and store',(done)=>{
  const store=createMockStore({});
  const expenseDefaultData={
    description:'',
    amount:0,
    note:'',
    createdAt:0
  }
  store.dispatch(startAddExpense({})).then(()=>{
    const actions=store.getActions();
    expect(actions[0]).toEqual({
      type:"ADD_EXPENSE",
      expense:{
        id:expect.any(String),
        ...expenseDefaultData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((sanapshot)=>{
    expect(sanapshot.val()).toEqual(expenseDefaultData);
    done();
  });
});
test('should setup set expense action object with data',()=>{
  const action=setExpenses(expenses);
  expect(action).toEqual({
    type:"SET_EXPENSES",
    expenses
  })
});

test('should fetch all expenses from firebase',(done)=>{
  const store=createMockStore({});
  store.dispatch(startSetExpense()).then(()=>{
    const actions=store.getActions();
    expect(actions[0]).toEqual({
      type:"SET_EXPENSES",
      expenses
    });
    done();
  })
});