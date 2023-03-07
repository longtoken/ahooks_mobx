import React from 'react';
import { Route } from '@ant-design/pro-layout/es/typing';
import {
  OrderedListOutlined,
} from '@ant-design/icons';
import Order from '@containers/order/order';
import { ORDER, ORDER_PAGE_A, ORDER_PAGE_B } from './paths';
import Step from '@containers/order/step';

const routes = [
  {
    name: '订单管理',
    path: ORDER,
    children: [
      {
        name: '订单管理-a',
        path: ORDER_PAGE_A,
        element: <Order />,
      },
      {
        name: '订单管理-b',
        path: ORDER_PAGE_B,
        element: <Step />,
      },
    ],
    icon: <OrderedListOutlined />,
  },
];


export default routes as Route[];