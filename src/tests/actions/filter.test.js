import {setTextFilter,setEndDate,setStartDate,sortByAmount,sortByDate} from '../../actions/filter.js';
import moment from 'moment';


test('Should generate set start date action object',()=>{
  const action=setStartDate(moment(0));
  expect(action).toEqual({
    type:'SET_START_DATE',
    startDate:moment(0)
  })
});
test('Should generate set End date action object',()=>{
  const action=setEndDate(moment(0));
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate:moment(0)
  })
});

test('Should set text filter with the provided one',()=>{
  const text="coffe";
  const action=setTextFilter(text);
  expect(action).toEqual({
    type:"SET_TEXT_FILTER",
    text:text
  });
});
test('Should set text filter with the default one',()=>{
  const action=setTextFilter();
  expect(action).toEqual({
    type:"SET_TEXT_FILTER",
    text:''
  });
});
test('Should Sort By Date',()=>{
  const action=sortByDate();
  expect(action).toEqual({
    type:"SORT_BY_DATE"
  });
});
test('Should Sort By Month',()=>{
  const action=sortByAmount();
  expect(action).toEqual({
    type:"SORT_BY_AMOUNT"
  });
});