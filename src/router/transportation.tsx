import React from 'react';
import { Route } from '@ant-design/pro-layout/es/typing';
import {
  OrderedListOutlined,
} from '@ant-design/icons';
import Transportation from '@containers/transportation';
import { TRANSPORTATION, TRANSPORTATION_PAGE_A } from './paths';

const routes = [
  {
    name: '运输管理',
    path: TRANSPORTATION,
    children: [
      {
        name: '销售库存管理-a',
        path: TRANSPORTATION_PAGE_A,
        element: <Transportation />
      },
    ],
    icon: <OrderedListOutlined />,
  },
];


export default routes as Route[];