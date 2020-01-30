import {createStore,combineReducers,applyMiddleware} from 'redux'
import expensesReducer from '../reducers/expences'; 
import filterReducer from '../reducers/filter.js'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
  const store=createStore(
    combineReducers({
    expenses:expensesReducer,
    filter:filterReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}


