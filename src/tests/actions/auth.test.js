import {login,logout} from '../../actions/auth.js';


test('should login and give uid',()=>{
  const action=login('12354abc');
  expect(action).toEqual({
    type:"LOGIN",
    uid:'12354abc'
  })
})


test('should logout',()=>{
  const action=logout();
  expect(action).toEqual({
    type:"LOGOUT"
  })
})