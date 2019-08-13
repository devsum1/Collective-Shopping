import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Routes/Home/Home"


ReactDOM.render(
        <Router>
        <App/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route  exact path='/cart' component={Cart} />
        </Switch>
</Router>
,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
