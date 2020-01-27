import {createStore,combineReducers} from 'redux'
import expensesReducer from '../reducers/expences'; 
import filterReducer from '../reducers/filter.js'

export default ()=>{
  const store=createStore(
    combineReducers({
    expenses:expensesReducer,
    filter:filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}


