import React from 'react';
import { Route } from '@ant-design/pro-layout/es/typing';
import Home from '@containers/home';
import { Navigate } from 'react-router-dom';
import { HOME, ROOT } from './paths';

const routes = [
  {
    path: HOME,
    hideInMenu: true,
    element: <Home />
  },
  {
    path: ROOT,
    hideInMenu: true,
    element: <Navigate to={HOME} replace />
  }
];


export default routes as Route[];