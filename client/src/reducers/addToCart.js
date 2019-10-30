
const addToCart = (state = [],action)=>{
    console.log(state);
    switch(action.type){
      case 'add':
         state = action.payload;
         console.log(state);
          break;
      case 'getItems':
           state = action.payload;
           break;
     
    default:
        return state;
    }
 return state;
}

export default addToCart;