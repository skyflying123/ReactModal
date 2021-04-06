import React from 'react';
import { Redirect } from 'umi';
import { stringify } from 'querystring';
import { pathMatchRegexp } from '@/utils';
import { UserLoginResponse as LoginRes } from '@/services/apis/user/user';
import baseConfig from '@config/baseConfig';

import UserLayout from './UserLayout';
import BasicLayout from './BasicLayout';
import { ConnectProps } from './interfaces';
import styles from '../theme/global.less';

const SecurityLayout = ({ children, route }: ConnectProps) => {
  // const { loginUser } = loginUserModel();
  const queryString = stringify({
    redirect: window.location.href,
  });

  // 不要删除importStyles， 否则全局样式将失效!!!
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const importStyles = styles;

  const currentUser: LoginRes['data'] = JSON.parse(window.sessionStorage.getItem('currentUser') || '{}');
  const localToken = currentUser?.token || undefined;

  if (pathMatchRegexp('/', window.location.pathname)) {
    return <Redirect to={baseConfig.home.default} />;
  }

  // console.log(
  //   '进入SecurityLayout-1',
  //   `匹配/user/login结果: ${!!pathMatchRegexp('/user/login', window.location.pathname)}`,
  //   `匹配token结果: ${!!localToken}`,
  //   `同时匹配结果: ${!!(pathMatchRegexp('/user/login', window.location.pathname) && localToken)}`,
  // );
  if (!pathMatchRegexp('/user/login', window.location.pathname) && !localToken) {
    // 除了login路由外（避免死循环），任意路由只要没有token强制登录
    return <Redirect to={`/user/login?${queryString}`} />;
  }
  // console.log(
  //   '进入SecurityLayout-2',
  //   `匹配/user/login结果: ${!!pathMatchRegexp('/user/login', window.location.pathname)}`,
  //   `匹配token结果: ${!!localToken}`,
  //   `同时匹配结果: ${!!(pathMatchRegexp('/user/login', window.location.pathname) && localToken)}`,
  // );

  if (pathMatchRegexp('/user/login', window.location.pathname) && localToken) {
    // 有token,但是是从login路由过来的，跳到首页
    return <Redirect to={baseConfig.home.default} />;
  }
  // console.log(
  //   '进入SecurityLayout-3',
  //   `匹配/user/login结果: ${!!pathMatchRegexp('/user/login', window.location.pathname)}`,
  //   `匹配token结果: ${!!localToken}`,
  //   `同时匹配结果: ${!!(pathMatchRegexp('/user/login', window.location.pathname) && localToken)}`,
  // );

  if (pathMatchRegexp('/user/login', window.location.pathname)) {
    return <UserLayout>{children}</UserLayout>;
  }

  return <BasicLayout route={route}>{children}</BasicLayout>;
};

export default SecurityLayout;
