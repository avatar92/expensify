import React from 'react';
import ReactDOM from 'react-dom'; 
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore'; 
import {addExpense,removeId} from './actions/expenses.js';
import {setTextFilter} from './actions/filter';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';


const store=configureStore();
console.log('testing')
const jsx=(
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);
ReactDOM.render(
  jsx,
  document.getElementById('app'))