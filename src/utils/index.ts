import _, { cloneDeep, isEmpty } from 'lodash';
import pathToRegexp from 'path-to-regexp';
import { parse } from 'querystring';
import { MenuWithChildrenItem } from '@/models/useAuthData';
import { MenuGetMenuByUserIdResponse as GetMenuByUserIdRes } from '@/services/apis/menu/menu';

/**
 * 将菜单数组转换为以指定值作为做Key的对象
 * @param menuArray 需要转换的菜单数组
 */
export const menuArray2ObjectWithKey = (
  menuArray: GetMenuByUserIdRes['data'],
  key: keyof GetMenuByUserIdRes['data'][0],
) => {
  const menuObjectWithKey: { [K: string]: MenuWithChildrenItem } = {};
  if (isEmpty(menuArray)) {
    return menuObjectWithKey;
  }
  menuArray.forEach((item) => {
    if (item[key]) {
      menuObjectWithKey[(item[key] as unknown) as string] = item as MenuWithChildrenItem;
    }
  });
  return menuObjectWithKey;
};

/**
 * 将菜单数组转换为树结构数组, 并添加tree需要的key和title
 * @param array 需要转换的数组
 * @returns {MenuDataItem[]} 返回树结构数组
 */
export const menuFlatArray2TreeArray = (array: GetMenuByUserIdRes['data']) => {
  const result: MenuWithChildrenItem[] = [];
  if (!array || array.length === 0) {
    return result;
  }
  const data = cloneDeep(array);

  // 先将菜单数组转成key值为id的对象
  const menuObjectKeyWithId = menuArray2ObjectWithKey(data, 'id');

  data.forEach((item) => {
    // 从上一步的菜单对象中取出每一个对象的父id
    const hashParent = menuObjectKeyWithId[item.pid];

    const temp = item as MenuWithChildrenItem;
    temp.title = item.name;
    temp.key = item.id;

    if (hashParent) {
      if (!hashParent.children) {
        hashParent.children = [] as MenuWithChildrenItem[];
      }
      hashParent.children.push(temp);
    } else {
      result.push(temp);
    }
  });
  return result;
};

/**
 * 从菜单数组提取页面操作权限，并且以path做Key的对象
 * @param menuArray 需要转换的菜单数组
 */
export const menuArray2ObjectWithPermission = (menuArray: GetMenuByUserIdRes['data']) => {
  const operateKeyWithPath = {} as { [K: string]: string };
  if (isEmpty(menuArray)) {
    return operateKeyWithPath;
  }
  menuArray.forEach((menu) => {
    if (menu.path) {
      operateKeyWithPath[menu.path] = menu.permission;
    }
  });
  return operateKeyWithPath;
};

/**
 * 获取一个菜单的第一个叶子节点
 * @param menuArray
 */
export const getFirstLeavesNode = (menuArray: MenuWithChildrenItem[]) => {
  let leavesNode = {} as MenuWithChildrenItem;
  if (isEmpty(menuArray)) {
    return leavesNode;
  }
  if (menuArray[0].children && !isEmpty(menuArray[0].children)) {
    leavesNode = getFirstLeavesNode(menuArray[0].children);
  } else {
    [leavesNode] = menuArray;
  }
  return leavesNode;
};

/**
 * 路径是否与regexp匹配
 * @param regexp 指定字符串、字符串数组或正则表达式
 * @param pathname 被匹配的路径
 * @returns {RegExpExecArray} 返回匹配结果或者null
 */
export const pathMatchRegexp = (regexp: string | RegExp | Array<string | RegExp>, pathname: string) => {
  return pathToRegexp(regexp).exec(pathname);
};

/**
 * 查找递归树素组中指定节点
 * @param tree 递归树
 * @param find 查找的节点
 */
export const deepSearch = <T extends ({ children?: T } & { [K in string]: any })[]>(
  tree: T,
  param: { [K in string]: any },
): T[0] | null => {
  const findKeys = Object.keys(param);
  let findObject: null | T[0] = null;

  const deepFind = <T extends ({ children?: T } & { [K in string]: any })[]>(treeTemp: T) => {
    treeTemp.forEach((item) => {
      const isFind = findKeys.every((findKey) => item[findKey] === param[findKey]);
      if (isFind) {
        findObject = _.cloneDeep(item);
        return;
      }
      if (item.children && item.children.length > 0) {
        deepFind(item.children);
      }
    });
  };

  deepFind(tree);

  return findObject;
};

/**
 * 从url中提取参数
 */
export const getPageQuery = () => parse(window.location.href.split('?')[1]);
