import { DefaultFooter, getMenuData, getPageTitle, FooterProps } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'umi';
import React, { useState } from 'react';
import baseConfig from '@config/baseConfig';
import { UndoOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';
import styles from './UserLayout.less';
import { UserLayoutProps } from './interfaces';

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const {
    children,
    location = {
      pathname: '',
    },
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    title: baseConfig.layout.title,
    breadcrumb,
    ...props,
  });

  const footerProps: FooterProps = {
    links: baseConfig.foot.links,
    copyright: baseConfig.foot.copyright,
    style: {
      backgroundColor: 'transparent',
      color: 'white',
    },
  };
  const [pictureNum, setPicturnNum] = useState(1);

  const returnBgClass = (): string[] => {
    return [styles.container, styles[`container${pictureNum}`]];
  };
  const changeBgPicture = (): void => {
    if (pictureNum === 4) {
      setPicturnNum(1);
    } else {
      setPicturnNum(pictureNum + 1);
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="上清所" content={title} />
      </Helmet>

      <div className={returnBgClass().join(' ')}>
        <div className={styles.refreshPictrue}>
          <UndoOutlined onClick={changeBgPicture} />
        </div>

        <div className={styles.header}>
          <Link to="/">
            <img alt="logo" className={styles.logo} src={logo} />
            <span className={styles.title}>{baseConfig.layout.title}</span>
          </Link>
        </div>
        <div className={styles.content}>{children}</div>
        <DefaultFooter {...footerProps} />
      </div>
    </HelmetProvider>
  );
};

export default UserLayout;
