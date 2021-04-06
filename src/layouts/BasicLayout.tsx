import React, { useEffect, useState } from 'react';
import ProLayout, { Settings, DefaultFooter, PageLoading, PageContainer, MenuDataItem } from '@ant-design/pro-layout';

import { Link } from 'umi';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import apisFunc from '@/services';
import RightContent from '@/components/GlobalHeader/RightContent';
import KeepAliveTabs from '@/components/KeepAliveTabs';
import { useSessionStorageState, useMount } from '@umijs/hooks';
import { deepSearch } from '@/utils';
// import Authorized from '@/components/Authorized';
import useAuthData, { MenuWithChildrenItem } from '@/models/useAuthData';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  MenuGetMenuByUserIdRequest as GetMenuByUserIdReq,
  MenuGetMenuByUserIdResponse as GetMenuByUserIdRes,
} from '@/services/apis/menu/menu';
import { UserLoginResponse as LoginRes } from '@/services/apis/user/user';
import baseConfig from '@config/baseConfig';
import { BreadcrumbProps as AntdBreadcrumbProps } from 'antd/lib/breadcrumb';

import { SettingOutlined, FileTextOutlined } from '@ant-design/icons';
import { BasicLayoutProps } from './interfaces';
import logo from '../assets/logo.png';

const IconMap: any = {
  SettingOutlined: <SettingOutlined />,
  FileTextOutlined: <FileTextOutlined />,
};

const defaultFooterDom = <DefaultFooter {...baseConfig.foot} />;

// 获取菜单数据
const { authData } = useAuthData();
const menuData = authData?.menusWithChildren || [];
const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && IconMap[icon as string],
    children: children && loopMenuItem(children),
  }));
const findMenuCb = () => {
  const homePath = baseConfig.home.default;
  const homeNodeId = authData?.menuObjectKeyWithPath[homePath].pid;
  const homeFather = deepSearch<MenuWithChildrenItem[]>(authData?.menusWithChildren || [], {
    id: homeNodeId,
  });
  return homeFather;
};
const settings: Settings = baseConfig.layout;
const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentUser = {} as LoginRes['data']] = useSessionStorageState<LoginRes['data']>('currentUser');

  // useMount(() => {
  //   setAuthData(fackRoutes as GetMenuByUserIdRes['data']);
  // });

  // 是否缩进菜单
  // const [collapsed, setMenuCollapse] = useState<boolean>(false);
  // 默认配置
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [settings, setSettings] = useState<Settings & { [K in string]: any }>(baseConfig.layout);
  // const [settings, setSettings] = useState<Settings & { [K in string]: any }>(baseConfig.layout);

  return (
    <div style={{ height: '100vh' }}>
      <ProLayout
        openKeys={false}
        disableContentMargin
        // collapsed={collapsed}
        logo={logo}
        // menuHeaderRender={(logoDom, titleDom) => (
        //   <Link to="/">
        //     {logoDom}
        //     {titleDom}
        //   </Link>
        // )}
        menuItemRender={(menuItemProps, defaultDom) => {
          // 隐藏了子菜单的, 找到该节点
          if (menuItemProps.hideChildrenInMenu) {
            const findMenu = deepSearch<MenuWithChildrenItem[]>(authData?.menusWithChildren || [], {
              id: menuItemProps.id,
            });
            if (findMenu && findMenu.children && findMenu.children.length > 0) {
              return <Link to={findMenu.children[0].path}>{defaultDom}</Link>;
            }
            return defaultDom;
          }
          // 有子菜单、或者是一个外链、或者没有对应的路由地址
          // 只显示默认文案，不添加路由跳转效果
          if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
            return defaultDom;
          }

          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        menuDataRender={() => loopMenuItem(menuData)}
        breadcrumbRender={(routes = []) => {
          const routePath = window.location.pathname.split('/').filter((path) => path);
          const breadcrumbs = routePath.map((_, index) => {
            let path = '';
            for (let i = 0; i <= index; i++) {
              path += `/${routePath[i]}`;
            }
            return {
              path: authData?.menuObjectKeyWithPath[path]?.path || '/',
              breadcrumbName: authData?.menuObjectKeyWithPath[path]?.name || '',
            };
          });
          return breadcrumbs;
        }}
        rightContentRender={() => <RightContent />}
        {...settings}
        {...props}
      >
        <PageContainer>
          <KeepAliveTabs />
          {children}
        </PageContainer>
      </ProLayout>
    </div>
  );
};

export default BasicLayout;
