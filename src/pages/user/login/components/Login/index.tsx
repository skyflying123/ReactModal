import { Tabs, Form } from 'antd';
import React, { useState } from 'react';
import useMergeValue from 'use-merge-value';
import classNames from 'classnames';
import LoginContext from './LoginContext';
import LoginTab from './LoginTab';
import styles from './index.less';
import { LoginType, LoginParamsType } from './interfaces';
import LoginItem from './LoginItem';
import LoginSubmit from './LoginSubmit';

const Login: LoginType = (props) => {
  const { className, activeKey, onTabChange, children, from } = props;
  // tab页集合(只存放了id)
  const [tabs, setTabs] = useState<string[]>([]);
  // 当前活动页
  const [active, setActive] = useState<any>({});
  // 当前登录类型
  const [type, setType] = useMergeValue('', {
    value: activeKey,
    onChange: onTabChange,
  });

  const TabChildren: React.ReactComponentElement<typeof LoginTab>[] = [];
  const otherChildren: React.ReactElement<unknown>[] = [];

  React.Children.forEach(
    children,
    (child: React.ReactComponentElement<typeof LoginTab> | React.ReactElement<unknown>) => {
      if (!child) {
        return;
      }

      if ((child.type as { typeName: string }).typeName === 'LoginTab') {
        TabChildren.push(child as React.ReactComponentElement<typeof LoginTab>);
      } else {
        otherChildren.push(child);
      }
    },
  );

  return (
    <LoginContext.Provider
      value={{
        tabUtil: {
          addTab: (id: string): void => {
            setTabs([...tabs, id]);
          },
          removeTab: (id: string): void => {
            setTabs(tabs.filter((currentId) => currentId !== id));
          },
        },
        updateActive: (activeItem): void => {
          if (!active) return;
          if (active[type]) {
            active[type].push(activeItem);
          } else {
            active[type] = [activeItem];
          }

          setActive(active);
        },
      }}
    >
      <div className={classNames(className, styles.login)}>
        <Form
          form={from}
          onFinish={(values) => {
            if (props.onSubmit) {
              props.onSubmit(values as LoginParamsType);
            }
          }}
        >
          {tabs.length ? (
            <>
              <Tabs
                animated={false}
                className={styles.tabs}
                activeKey={type}
                onChange={(changeKey): void => {
                  setType(changeKey);
                }}
              >
                {TabChildren}
              </Tabs>
              {otherChildren}
            </>
          ) : (
            children
          )}
        </Form>
      </div>
    </LoginContext.Provider>
  );
};

Login.Tab = LoginTab;
Login.Submit = LoginSubmit;

Login.UserName = LoginItem.UserName;
Login.Password = LoginItem.Password;
Login.Mobile = LoginItem.Mobile;
Login.Captcha = LoginItem.Captcha;

export default Login;
