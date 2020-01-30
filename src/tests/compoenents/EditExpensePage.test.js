import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixture/expenses';


let startEditExpense,startRemoveId,history,wrapper;

beforeEach(()=>{
  startEditExpense=jest.fn();
  startRemoveId=jest.fn();
  history={push:jest.fn()};
  wrapper=shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveId={startRemoveId} history={history} expense={expenses[2]} />)
});

test('should render EditExpensePage snapshot',()=>{
  expect(wrapper).toMatchSnapshot();
});
test('should handle editExpense',()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(startEditExpense).toHaveBeenCalledWith(expenses[2].id,expenses[2])
})
test('should handle removeId',()=>{
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenCalledWith('/');
  expect(startRemoveId).toHaveBeenCalledWith(expenses[2].id)
});

