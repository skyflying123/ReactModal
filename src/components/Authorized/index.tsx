import React from 'react';
import { pathMatchRegexp } from '@/utils';
import { Result } from 'antd';
import useAuthData from '@/models/useAuthData';
import { history } from 'umi';

/**
 * 路由无匹配项
 */
const Forbidden = <Result status={403} title="403" subTitle="没有权限，请联系管理员." />;

export const Authorized: React.FC = ({ children }) => {
  const { authData } = useAuthData();
  const authRoutes = Object.keys(authData?.menuObjectKeyWithPath || {});
  if (authRoutes.findIndex((route: string) => pathMatchRegexp(route, history.location.pathname)) > -1) {
    return <>{children}</>;
  }
  return Forbidden;
};

export default Authorized;
