import axios from 'axios';
import thunk from 'redux-thunk';

export const addIn = data => {
       return dispatch =>{
        axios.post('/cart/add',data)
        .then(res =>dispatch({
            type: 'add',
            payload:res.data
        }));
       
    }
}

export const getItems = ()=>{
    return dispatch =>{
        axios.get('/cart')
        .then(res =>dispatch({
            type: 'getItems',
            payload:res.data
        }));
}
}