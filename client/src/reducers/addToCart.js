const addToCart = (state = [],action)=>{
    switch(action.type){
      case 'add':
          state.push(action.payload);
          break;
      case 'delete':
           state.pop(action.payload);
           break;
    default:
        return state;
    }
 return state;
}

export default addToCart;