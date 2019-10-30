
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Routes/Home/Home"
import Login from "./Components/Routes/Login/Login";
import Products from './Components/Products/Products'
import  SearchedProducts  from './Components/SearchedProducts/SearchedProducts';
import {createStore,applyMiddleware,compose} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import allReducers from './reducers';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Must Import from another file store.js
const store =createStore(
        allReducers,
        composeEnhancer(applyMiddleware(thunk)),
        
      );

ReactDOM.render(

  <Router>
<Provider store = {store} >
     <App/>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route  exact path='/cart' component={Cart} />
        <Route  exact path='/login' component={Login} />
        <Route exact path = '/search' component = {SearchedProducts}/>
       </Switch>
</Provider>
  </Router>

,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



