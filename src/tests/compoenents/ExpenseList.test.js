import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList.js';
import expenses from '../fixture/expenses.js';


test('should render EexpenseList with expenses',()=>{
  const wrapper=shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
})
test('should render EexpenseList with empty message',()=>{
  const wrapper=shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
})