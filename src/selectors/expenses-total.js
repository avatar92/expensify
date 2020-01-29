export default (expenses)=>{
  if(expenses.length===0){
    return 0;
  }else{
  const reducer=(a,b)=>a+b;
  const pricesArray=expenses.map((expense)=>expense.amount)
  return pricesArray.reduce(reducer)
  }
};