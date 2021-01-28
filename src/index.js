import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';
import Profile from './component/Profile';
import User from './component/User';
import './index.css';
import { HashRouter as Router, Link, Route } from './react-router-dom';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <Router>
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={{ pathName: "/user", state: { id: 1 } }}>User</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <Route path="/" component={Home} ></Route>
      <Route path="/user" component={User} ></Route>
      <Route path="/profile" component={Profile} ></Route>
    </>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
