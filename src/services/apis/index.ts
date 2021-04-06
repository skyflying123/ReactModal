import baseConfig from '@config/baseConfig';
import user from './user';
import menu from './menu';
import system from './systemManager';

type Menu = typeof menu;
type User = typeof user;
type System = typeof system;

export type Allapi = Menu & User & System;

const allApis: {
  [K in keyof typeof baseConfig.backEndModuleUrl]: { [K in string]: object | string };
} = {
  authenticate: {
    ...menu,
    ...user,
    ...system,
  },
};

export default allApis;
