
const expensesDefaultState=[];


const expensesReducer=(state=expensesDefaultState,action)=>{
  switch(action.type){
    case 'ADD_EXPENSE':
      return [...state,action.expense]
    case 'REMOVE_ID':
      // console.log('this the id of the Remove button',action.id)
      return state.filter((x) => x.id !== action.id);
      // return state.concat({id:action.id,description:"hello",amount:0,createdAt:0})
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id===action.id){
          return{
            ...expense,
            ...action.updates
          };
        }else{
          return expense
        }
      })
    default:
      return state
  }
};


export default expensesReducer; 