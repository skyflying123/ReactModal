import React from 'react';
import { RouteContext } from '@ant-design/pro-layout';
import UserInfo from './UserDropdown';
import styles from './index.less';
import { GlobalHeaderRightProps } from './interfaces';

const GlobalHeaderRight: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  return (
    <RouteContext.Consumer>
      {(layoutConfig) => {
        let className = styles.right;
        const { navTheme, layout } = layoutConfig;
        if (navTheme === 'dark' && layout === 'top') {
          className = `${styles.right}  ${styles.dark}`;
        }
        return (
          <div className={className}>
            <UserInfo menu={menu} />
          </div>
        );
      }}
    </RouteContext.Consumer>
  );
};

export default GlobalHeaderRight;
