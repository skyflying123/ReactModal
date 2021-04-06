import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { TabPaneProps } from 'antd/es/tabs';
import LoginContext from './LoginContext';
import { LoginTabProps, LoginContextProps } from './interfaces';

const { TabPane } = Tabs;

const generateId = (() => {
  let i = 0;
  return (prefix = '') => {
    i += 1;
    return `${prefix}${i}`;
  };
})();

const LoginTab: React.FC<LoginTabProps> = (props) => {
  const { active, tabUtil } = props;
  // 渲染后将自己的id放入Form组件的tabs中，用于From组件中的Tabs
  useEffect(() => {
    const uniqueId = generateId('login-tab-');
    if (tabUtil) {
      tabUtil.addTab(uniqueId);
    }
  }, []);
  const { children } = props;
  return <TabPane {...props}>{active && children}</TabPane>;
};

const WrapContext: React.FC<TabPaneProps> & {
  typeName: string;
} = (props) => (
  /* eslint-disable react/jsx-props-no-spreading */
  <LoginContext.Consumer>
    {(value: LoginContextProps) => <LoginTab tabUtil={value.tabUtil} {...props} />}
  </LoginContext.Consumer>
  /* eslint-enable */
);

// 标志位 用来判断是不是自定义组件
WrapContext.typeName = 'LoginTab';

export default WrapContext;
