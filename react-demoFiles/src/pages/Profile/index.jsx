import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './index.css';

export default function Profile() {
  const location = useLocation();
  const pathname = location.pathname;
  const [active, setDefaultActive] = useState(false);

  useEffect(() => {
    if (pathname === '/profile' || pathname === '/profile/history')
      setDefaultActive(true);
    else setDefaultActive(false);
  }, [pathname]);

  return (
    <div className="main-profile">
      {/* <h2>Profile</h2> */}
      <div className="profile">
        <NavLink
          to="/profile/history"
          className={({ isActive }) =>
            isActive || active ? 'profile-active' : ''
          }
        >
          我的历史
        </NavLink>
        <NavLink
          to="/profile/culture"
          className={({ isActive }) => (isActive ? 'profile-active' : '')}
        >
          我的文化
        </NavLink>
        <NavLink
          to="/profile/practice"
          className={({ isActive }) => (isActive ? 'profile-active' : '')}
        >
          我的练习
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
