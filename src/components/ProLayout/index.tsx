
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProLayout, { DefaultFooter, PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

import { IBasicLayoutProps } from './index.interface';
import { BaseMenuProps } from '@ant-design/pro-layout/es/components/SiderMenu/BaseMenu';
import { Route } from '@ant-design/pro-layout/es/typing';

export default function BasicLayout(props: IBasicLayoutProps) {
  const location = useLocation();

  const menuItemReactNode: BaseMenuProps['menuItemRender'] = (menuItemProps, defaultDom) => {
    if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
      return defaultDom;
    }
    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  }

  const itemRenderReactNode = (route: Route, params: unknown, routes: Route[]) => {
    const { path } = route;
    const isHome = path === '/';
    const isVirtualPage = path.lastIndexOf('/') === 0 && !isHome;
    const isLast = routes.indexOf(route) === routes.length - 1;

    if (isVirtualPage || isLast) {
      return <span>{route.breadcrumbName}</span>;// 除了首页以外
    }
    return <Link to={path}>{route.breadcrumbName}</Link>;// 首页
  }
  return (
    <ProLayout
      location={location}
      token={{
        colorBgAppListIconHover: 'rgba(0,0,0,0.06)',
        colorTextAppListIconHover: 'rgba(255,255,255,0.95)',
        colorTextAppListIcon: 'rgba(255,255,255,0.85)',
        sider: {
          colorBgCollapsedButton: '#fff',
          colorTextCollapsedButtonHover: 'rgba(0,0,0,0.65)',
          colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
          colorMenuBackground: '#004FD9',
          colorBgMenuItemCollapsedHover: 'rgba(0,0,0,0.06)',
          colorBgMenuItemCollapsedSelected: 'rgba(0,0,0,0.15)',
          colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.85)',
          colorMenuItemDivider: 'rgba(255,255,255,0.15)',
          colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
          colorBgMenuItemSelected: 'rgba(0,0,0,0.15)',
          colorTextMenuSelected: '#fff',
          colorTextMenuItemHover: 'rgba(255,255,255,0.75)',
          colorTextMenu: 'rgba(255,255,255,0.75)',
          colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
          colorTextMenuTitle: 'rgba(255,255,255,0.95)',
          colorTextMenuActive: 'rgba(255,255,255,0.95)',
          colorTextSubMenuSelected: '#fff',
        },
      }}
      title={props.title || '后台系统'}
      // 浏览器标签标题
      pageTitleRender={(prop, defaultPageTitle) => `${defaultPageTitle}`}
      // 路由菜单
      menuDataRender={() => props.routes}
      // 菜单栏列表
      menuItemRender={menuItemReactNode}
      // 面包屑
      breadcrumbRender={
        (routers = []) => [
          {
            path: '/',
            breadcrumbName: '首页',
          },
          ...routers,
        ]
      }
      // 面包屑每个item
      itemRender={itemRenderReactNode}
      // 侧边栏跟顶部
      layout='mix'
      // layout底部 
      footerRender={
        () => (
          <DefaultFooter
            copyright={`${new Date().getFullYear()} copyright`}
            links={false}
          />
        )
      }
    >
      <PageContainer>
        <ProCard>
          {props.children}
        </ProCard>
      </PageContainer>
    </ProLayout>
  );
}
