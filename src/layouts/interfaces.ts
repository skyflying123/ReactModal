import { IRoute } from '@umijs/core';
import { match } from 'react-router-dom';
import { Location, LocationState, History } from 'history';
import { ReactNode } from 'react';
import { BasicLayoutProps as ProLayoutProps, MenuDataItem } from '@ant-design/pro-layout';

export interface ConnectProps<P extends { [K in keyof P]?: string } = {}, S = LocationState> {
  // https://github.com/umijs/umi/pull/2194
  match?: match<P>;
  location: Location<S>;
  history: History;
  route: IRoute & { authority: string[] };
  children: ReactNode;
}

export interface UserLayoutProps extends Partial<ConnectProps> {
  breadcrumbNameMap?: {
    [path: string]: MenuDataItem;
  };
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}

export interface BasicLayoutProps extends ProLayoutProps {
  /*
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  */
  route: ProLayoutProps['route'];
}
export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
};
