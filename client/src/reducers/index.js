import { combineReducers } from "redux";
import orderCount from './orderCountReducer';
import addToCart from './addToCart';

const allReducers = combineReducers({
    orderCount:orderCount,
    addToCart:addToCart,

});

export default allReducers;