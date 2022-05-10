import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export default class Main extends Component {
  render() {
    return (
      <div className="header">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'header-active' : '')}
        >
          首页
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'header-active' : '')}
        >
          关于
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? 'header-active' : '')}
        >
          我的
        </NavLink>
      </div>
    );
  }
}
