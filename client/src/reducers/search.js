const orderCountReducer = (state = " ", action )=>{
    switch(action.type){
        case 'search':
           state = action.payload;
        
    }
    return state;
}
export default orderCountReducer;