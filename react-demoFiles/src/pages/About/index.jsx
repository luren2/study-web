import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './index.css';

export default function About() {
  const [active, setActive] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/about' || pathname === '/about/history') setActive(true);
    else setActive(false);
  }, [pathname]);

  return (
    <div className="main-about">
      {/* <h2>About</h2> */}
      <div className="about">
        <NavLink
          to="/about/history"
          className={({ isActive }) =>
            isActive || active ? ' about-active' : ''
          }
        >
          历史
        </NavLink>
        <NavLink
          to="/about/culture"
          className={({ isActive }) => (isActive ? 'about-active' : '')}
        >
          文化
        </NavLink>
        <NavLink
          to="/about/practice"
          className={({ isActive }) => (isActive ? 'about-active' : '')}
        >
          练习
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
