import { combineReducers } from "redux";
import orderCount from './orderCountReducer';
import addToCart from './addToCart';
import search from './search';

const allReducers = combineReducers({
    orderCount:orderCount,
    addToCart:addToCart,
    search:search,

});

export default allReducers;