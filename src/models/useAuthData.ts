import { useState } from 'react';
import { createModel } from 'hox';
import fackRoutes from '@/layouts/fackRoutes';

import { MenuGetMenuByUserIdResponse as GetMenuByUserIdRes } from '@/services/apis/menu/menu';
import { menuArray2ObjectWithKey, menuFlatArray2TreeArray, menuArray2ObjectWithPermission } from '@/utils';

export type MenuWithChildrenItem = GetMenuByUserIdRes['data'][0] & {
  children?: MenuWithChildrenItem[];
  title: string;
  key: string;
};

export interface AuthData {
  menusWithChildren: MenuWithChildrenItem[];
  operateKeyWithPath?: { [K: string]: string };
  menuObjectKeyWithPath: { [K: string]: MenuWithChildrenItem };
}

const useAuthData = () => {
  // const [authData, setAuthDataWithOpera] = useState<AuthData>();
  //
  // const setAuthData = (newAuthData: GetMenuByUserIdRes['data']) => {
  //   const menusWithChildren = menuFlatArray2TreeArray(newAuthData);
  //   const menuObjectKeyWithPath = menuArray2ObjectWithKey(newAuthData, 'path');
  //   const operateKeyWithPath = menuArray2ObjectWithPermission(newAuthData);
  //   setAuthDataWithOpera({ menusWithChildren, operateKeyWithPath, menuObjectKeyWithPath });
  // };
  const authData: AuthData = {
    menusWithChildren: menuFlatArray2TreeArray(fackRoutes as GetMenuByUserIdRes['data']),
    menuObjectKeyWithPath: menuArray2ObjectWithKey(fackRoutes as GetMenuByUserIdRes['data'], 'path'),
    operateKeyWithPath: menuArray2ObjectWithPermission(fackRoutes as GetMenuByUserIdRes['data']),
  };

  return { authData };
};

export default useAuthData;
