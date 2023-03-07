import { Route } from '@ant-design/pro-layout/es/typing';
import common from './common';
import order from './order';
import transportation from './transportation';

const routes = [
  ...common,
  ...order,
  ...transportation,
];

export default routes as Route[];