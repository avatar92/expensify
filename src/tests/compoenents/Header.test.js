import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header.js';

test('should render Header correctly',()=>{
  const wrapper=shallow(<Header startLogOut={()=>{}}/>);
  expect(wrapper.find('h1').text()).toBe('Expensify');
  expect(wrapper).toMatchSnapshot();
}); 

test('should call startlogout on click button',()=>{
  const startLogOut=jest.fn();
  const wrapper=shallow(<Header startLogOut={startLogOut}/>);
  wrapper.find('button').simulate('click');
  expect(startLogOut).toHaveBeenCalled();
})