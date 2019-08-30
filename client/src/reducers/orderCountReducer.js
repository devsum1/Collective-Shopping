const orderCountReducer = (state = 0, action )=>{
      switch(action.type){
          case 'Order':
              return state + 1;
          case 'Cancel':
              return state - 1;
          default:
              return state;
      }
}
export default orderCountReducer;