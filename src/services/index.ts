import { useRequest } from 'umi';
import config from '@config/baseConfig';
import apis, { Allapi } from './apis';
import { UmiRequestOptions, WithData, FormatUrlInfoType } from './interface';

/**
 * 前缀格式化
 * @param urlInfo 接口信息
 * @param moduleName 模块名称
 */
const formatBasePrefix = (urlInfo: string | { url: string; mockUrl: string }, moduleName?: string) => {
  const modulePrefix = moduleName ? `/${moduleName}` : '';
  const formatUrlInfo: FormatUrlInfoType = {
    mock: {
      customPrefix: '',
      format: '',
    },
    dev: '',
    pro: '',
  };

  let mockUrlArray: string[] = [];
  let dataUrlArray: string[] = [];

  // 拆分urlInfo信息
  if (typeof urlInfo === 'object') {
    mockUrlArray = urlInfo.mockUrl?.split(' ') || [];
    dataUrlArray = urlInfo.url?.split(' ') || [];
  } else {
    dataUrlArray = urlInfo.split(' ') || [];
  }

  // （开发模式加前缀）
  if (process.env.NODE_ENV === 'development') {
    // locale自定义前缀集合
    let prefixs: { [K in string]: string } = {};

    // api中的自定义前缀
    let customPrefix = '';

    // （开发模式下为mockURL加前缀）(>1时才有可能设置了自定义前缀)
    if (mockUrlArray.length > 1) {
      // 判断是否有自定义前缀（在umirc.local.ts中配置define）
      if (process.env.prefixs) {
        prefixs = JSON.parse(process.env.prefixs);
      }

      // 从mockUrl中找到前缀是啥
      if (mockUrlArray.length === 3) {
        [, customPrefix] = mockUrlArray;
      } else if (mockUrlArray[0].toUpperCase() !== 'POST' || mockUrlArray[0].toUpperCase() !== 'GET') {
        [customPrefix] = mockUrlArray;
      }
      formatUrlInfo.mock.customPrefix = customPrefix;
    }
    // （开发模式下为mockURL加前缀）
    formatUrlInfo.mock.format = `${config.basePrefix.mock}${prefixs[customPrefix] || ''}${modulePrefix}${
      mockUrlArray[mockUrlArray.length - 1]
    }`;
    // （开发模式下为非mockURL加前缀）
    formatUrlInfo.dev = `${config.basePrefix.dev}${modulePrefix}${dataUrlArray[dataUrlArray.length - 1]}`;
  } else {
    // 生产模式下加前缀
    formatUrlInfo.pro = `${config.basePrefix.pro}${modulePrefix}${dataUrlArray[dataUrlArray.length - 1]}`;
  }

  return formatUrlInfo;
};

/**
 * 解析接口方法
 * @param urlInfo 接口信息
 */
const parseMethodFormURL = (urlInfo: string | { url: string; mockUrl: string }): string => {
  let method = 'get';
  let urlArray: string[];
  if (typeof urlInfo === 'string') {
    urlArray = urlInfo.split(' ');
  } else {
    urlArray = urlInfo.url?.split(' ') || urlInfo.mockUrl.split(' ');
  }

  switch (urlArray[0]?.toLowerCase()) {
    case 'get':
      method = 'get';
      break;
    case 'post':
      method = 'post';
      break;
    default:
      method = 'get';
  }

  return method;
};

/**
 * 生成request函数
 * @param params 接口信息
 * @param moduleUrl 对应哪个后端模块
 */
const genApiFunc = (params: string | { url: string; mockUrl: string }, moduleUrl?: string) => {
  let url = '';

  // 确定最终url
  const formatURL = formatBasePrefix(params, moduleUrl);
  if (process.env.NODE_ENV === 'development') {
    // locale自定义前缀集合
    let localePrefixs: { [K in string]: string } = {};
    if (process.env.prefixs) {
      localePrefixs = JSON.parse(process.env.prefixs);
    }
    if (localePrefixs[formatURL.mock.customPrefix]) {
      url = formatURL.mock.format;
    } else {
      url = formatURL.dev;
    }
  } else {
    url = formatURL.pro;
  }

  // 确定最终方法(最终方法以真实url定义的为准)
  const method = parseMethodFormURL(params);

  return (options?: any) => {
    return useRequest(
      (data) =>
        ({
          url,
          data,
          method,
          params: method === 'get' ? data : {},
        } as UmiRequestOptions),
      options as any,
    );
  };
};

// 全部的request函数
const apisFunc = {} as {
  [X in keyof Allapi]: WithData;
};

(Object.keys(apis) as [keyof typeof apis]).forEach((moduleName) => {
  // 查找模块对应的前缀
  const modulePrefix = config.backEndModuleUrl[moduleName] || '';

  // 获取该模块下所有的api
  const moduleApis = apis[moduleName];

  // 为api生成request
  Object.keys((moduleApis as unknown) as keyof Allapi).forEach((apiName) => {
    // 生成useRequest
    if (moduleApis) {
      apisFunc[(apiName as unknown) as keyof Allapi] = genApiFunc(
        moduleApis[apiName] as string | { url: string; mockUrl: string },
        modulePrefix,
      );
    }
  });
});
export default apisFunc;
