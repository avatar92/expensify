import React from 'react';
import {NavLink} from 'react-router-dom' 
const Header=()=>(
  <div>
    <h1>Expensify</h1>
    <NavLink exact to='/' activeClassName="is-active">Home</NavLink>
    <NavLink to='/create' activeClassName="is-active">Create Page</NavLink>
  </div>
);
export default Header; 