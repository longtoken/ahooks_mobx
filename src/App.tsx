import React from 'react';
import { useRoutes } from 'react-router-dom';
import BasicLayout from './components/ProLayout';
import routers from './router';
import './App.scss';

function App() {
  const ROUTE = useRoutes(routers)

  return (
    <BasicLayout
      title='后台系统'
      routes={routers}
    >
      {ROUTE}
    </BasicLayout>
  );
}

export default App;
