import filterReducer from '../../reducers/filter.js';
import moment, { months } from 'moment'

test('should setup default filter value',()=>{
  const state=filterReducer(undefined,{type:'@@INIT'});
  expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
  });
});

test('should set sorBy to amount',()=>{
  const state=filterReducer(undefined,{type:'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});
test('should set sorBy to date',()=>{
  const currentState={
    text:'',
    startDate:undefined,
    endDate:undefined,
    sortBy:'amount'
  };
  const action={
    type:"SORT_BY_DATE"
  }
  const state=filterReducer(currentState,action);
  expect(state.sortBy).toBe('date');
});
test('should set text filter',()=>{
  const action={
    type:"SET_TEXT_FILTER",
    text:"some text filter"
  };
  const currentState={
    text:'',
    startDate:undefined,
    endDate:undefined,
    sortBy:'date'
  };
  const state=filterReducer(currentState,action);
  expect(state).toEqual({text:action.text,startDate:undefined,endDate:undefined,sortBy:'date'});
});
test('should set start date filter',()=>{
  const action={
    type:"SET_START_DATE",
    startDate:moment(0).add(4,'days')
  };
  const currentState={
    text:'',
    startDate:undefined,
    endDate:undefined,
    sortBy:'date'
  };
  const state=filterReducer(currentState,action);
  expect(state).toEqual({text:'',startDate:moment(0).add(4,'days'),endDate:undefined,sortBy:'date'})
});
test('should set end date filter',()=>{
  const action={
    type:"SET_END_DATE",
    endDate:moment(0).add(4,'days')
  };
  const currentState={
    text:'',
    startDate:undefined,
    endDate:undefined,
    sortBy:'date'
  };
  const state=filterReducer(currentState,action);
  expect(state).toEqual({text:'',startDate:undefined,endDate:moment(0).add(4,'days'),sortBy:'date'})  
});