import { ReactNode } from 'react';
import { Route } from '@ant-design/pro-layout/es/typing';


export interface IBasicLayoutProps {
  title: string;
  routes: Array<Route>;
  children?: ReactNode;
}
