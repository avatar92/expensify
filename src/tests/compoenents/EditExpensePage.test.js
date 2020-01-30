import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixture/expenses';


let editExpense,startRemoveId,history,wrapper;

beforeEach(()=>{
  editExpense=jest.fn();
  startRemoveId=jest.fn();
  history={push:jest.fn()};
  wrapper=shallow(<EditExpensePage editExpense={editExpense} startRemoveId={startRemoveId} history={history} expense={expenses[2]} />)
});

test('should render EditExpensePage snapshot',()=>{
  expect(wrapper).toMatchSnapshot();
});
test('should handle editExpense',()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(editExpense).toHaveBeenCalledWith(expenses[2].id,expenses[2])
})
test('should handle removeId',()=>{
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenCalledWith('/');
  expect(startRemoveId).toHaveBeenCalledWith(expenses[2].id)
});

