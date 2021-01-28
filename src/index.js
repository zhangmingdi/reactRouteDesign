import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './component/Home';
import Router from './react-router-dom/HashRouter';
import Route from './react-router-dom/Router';
import User from './component/User';
import Profile from './component/Profile';




ReactDOM.render(
  <Router>
    <>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul> */}
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
