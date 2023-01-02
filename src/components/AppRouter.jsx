import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Events } from '../pages/Events';
import { privateRoutes, publicRoutes } from '../router';
import { useSelector } from 'react-redux';

export const AppRouter = () => {
  const isAuth = useSelector(state => state.auth.isAuth);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.Component />} />
      ))}
      <Route path="*" element={<Events />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.Component />} />
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
