import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// import Loadable from 'react-loadable';
// import Login from '@/pages/Login';
// import Main from '@/pages/Main';
// import Home from '@/pages/Home';
// import About from '@/pages/About';
// import Profile from '@/pages/Profile';
// import NotFound from '@/pages/NotFound';
const Login = React.lazy(() => import('@/pages/Login'));
const Main = React.lazy(() => import('@/pages/Main'));
const Home = React.lazy(() => import('@/pages/Home'));
const About = React.lazy(() => import('@/pages/About'));
const Profile = React.lazy(() => import('@/pages/Profile'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));

// const Login = Loadable({
//   loader: () => import('@/pages/Login'),
//   loading: Loginx,
// });
// const Main = Loadable({
//   loader: () => import('@/pages/Main'),
//   loading: Loginx,
// });
// const Home = Loadable({
//   loader: () => import('@/pages/Home'),
//   loading: Loginx,
// });
// const About = Loadable({
//   loader: () => import('@/pages/About'),
//   loading: Loginx,
// });
// const Profile = Loadable({
//   loader: () => import('@/pages/Profile'),
//   loading: Loginx,
// });
// const NotFound = Loadable({
//   loader: () => import('@/pages/NotFound'),
//   loading: Loginx,
// });

const GetAllRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
          children: [
            {
              path: '',
              index: true, //默认路由
              element: <h2>History</h2>,
              // element: <NotFound />,
            },
            {
              path: 'history',
              element: <h2>History</h2>,
            },
            {
              path: 'culture',
              element: <h2>Culture</h2>,
            },
            {
              path: 'practice',
              element: <h2>Practice</h2>,
            },
          ],
        },
        {
          path: '/profile',
          element: <Profile />,
          children: [
            {
              path: '',
              index: true,
              element: <h2>我的History</h2>,
            },
            {
              path: 'history',

              element: <h2>我的History</h2>,
            },
            {
              path: 'culture',
              element: <h2>我的Culture</h2>,
            },
            {
              path: 'practice',
              element: <h2>我的Practice</h2>,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default GetAllRoutes;
