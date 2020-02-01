import {Route,Router,Switch} from 'react-router-dom';
import React from 'react';
import { createBrowserHistory } from 'history';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js'; 
import Login from '../components/Login.js';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createBrowserHistory();

const AppRouter=()=>(
  <Router history={history}>
    <div>
      <Switch> 
        <PublicRoute exact path='/' component={Login} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path='/create' component={AddExpensePage}/>
        <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
        <Route path='/help' component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter; 
