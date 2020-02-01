import React from 'react';
import ReactDOM from 'react-dom'; 
import {Provider} from 'react-redux'
import AppRouter,{ history } from './routers/AppRouter.js';
import configureStore from './store/configureStore'; 
import {startSetExpense} from './actions/expenses.js';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase.js';
import {login,logout} from './actions/auth'
const store=configureStore();
// console.log('testing')
const jsx=(
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);
ReactDOM.render(
  <p>LOADING....</p>,
  document.getElementById('app')
);

let hasRendered=false;

const renderApp= () =>{
 if(!hasRendered){
  ReactDOM.render(jsx,document.getElementById('app'))
  hasRendered=true;
 }  
}

const state=store.getState();

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    console.log(state)
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpense()).then(()=>{
      renderApp();
      if(history.location.pathname==='/'){
        history.push('/dashboard')
      }
    });
  }else {
    store.dispatch(logout());
    renderApp();
    history.push('/')
  }
})