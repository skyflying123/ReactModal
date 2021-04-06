import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Spin } from 'antd';
import { ClickParam } from 'antd/es/menu';
import React from 'react';
import { history } from 'umi';
import useLoginUser from '@/models/useLoginUser';
import { useSessionStorageState } from '@umijs/hooks';
import { UserLoginResponse } from '@/services/apis/user/user';
import baseConfig from '@config/baseConfig';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import { GlobalHeaderUserProps } from './interfaces';

const UserDropdown: React.FC<GlobalHeaderUserProps> = ({ menu }) => {
  const [currentUser] = useSessionStorageState<UserLoginResponse['data']>('currentUser');
  const { userName } = currentUser || {};
  const { changeLoginUser } = useLoginUser();

  const onMenuClick = (event: ClickParam) => {
    const { key } = event;

    if (key === 'logout') {
      changeLoginUser();
      history.push();
      history.push({
        pathname: history.location.pathname,
        query: history.location.query,
      });
      return;
    }

    history.push(baseConfig.home.default);
  };

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      {menu && (
        <Menu.Item key="center">
          <UserOutlined />
          个人中心
        </Menu.Item>
      )}
      {menu && (
        <Menu.Item key="settings">
          <SettingOutlined />
          个人设置
        </Menu.Item>
      )}
      {menu && <Menu.Divider />}

      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return currentUser && currentUser.userName ? (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <span className={styles.name}>{userName}</span>
      </span>
    </HeaderDropdown>
  ) : (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );
};

export default UserDropdown;
