import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';
import Profile from './component/Profile';
import User from './component/User';
import './index.css';
import { HashRouter as Router, Link, Route, Switch, Redirect, NavLink } from './react-router-dom';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <Router>
    <>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route path="/user" component={User} ></Route>
        <Route path="/profile" component={Profile} ></Route>
        <Redirect exact from="/home" to="/" />
      </Switch>

    </>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
