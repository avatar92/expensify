import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixture/expenses'


it('should 0 if no expenses',()=>{
  const res=selectExpensesTotal([]);
  expect(res).toBe(0);
});


it('should correctly add up a single expense',()=>{
  const res=selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

it('should correctly add all expenses',()=>{
  const res=selectExpensesTotal(expenses);
  // console.log(res)
  expect(res).toBe(114195);
});

