import { combineReducers } from "redux";
import orderCount from './orderCountReducer';
import addToCart from './addToCart';
import search from './search';
import authReducer from './authReducer';

const allReducers = combineReducers({
    orderCount:orderCount,
    addToCart:addToCart,
    user:authReducer,
    search:search,
    
});

export default allReducers;