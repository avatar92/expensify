import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth.js'; 
export const Header=({startLogOut})=>(
  <div>
    <h1>Expensify</h1>
    <NavLink exact to='/dashboard' activeClassName="is-active">Home</NavLink>
    <NavLink to='/create' activeClassName="is-active">Create Page</NavLink>
    <button onClick={startLogOut}>Log Out</button>
  </div>
);

const mapDispatchToProps=(dispatch)=>({
  startLogOut:()=>dispatch(startLogOut())
});
export default connect(undefined,mapDispatchToProps)(Header); 