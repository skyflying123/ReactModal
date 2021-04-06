import { RequestConfig, request as umiRequest } from 'umi';
import { requestErrMsg } from '@/utils/constant';
import config from '@config/baseConfig';

/**
 * umi-request 配置 https://umijs.org/zh-CN/plugins/plugin-request#运行时配置
 */
export const request: RequestConfig = {
  timeout: 20000,
  middlewares: [],
  errorConfig: {
    adaptor: (resData: { code: string; data: any; message: string }, ctx) => {
      const { res } = ctx;
      if (res instanceof Response) {
        return {
          success: res.status >= 200 && res.status < 300,
          errorMessage: `${requestErrMsg[res.status] || res.statusText}，请联系管理员！`,
          showType: 2,
          errorCode: res.status.toString(),
        };
      }
      return {
        ...resData,
        success: resData.code === config.successCode,
        errorMessage: `${resData.message} 错误码：${resData.code || ''}`,
        // 0不提示错误, 1警告信息提示, 2错误信息提示(message), 4通知提示(notification), 9页面跳转
        showType: 2,
        errorCode: resData.code,
      };
    },
  },
  // errorHandler: requestErrorHandle,
  requestInterceptors: [
    (url, options) => {
      return {
        url: `${url}`,
        options: {
          ...options,
          interceptors: true,
          headers: {
            ...options.headers,
            userId: JSON.parse(window.sessionStorage.getItem('currentUser') || '{"userId":""}').userId,
            token: JSON.parse(window.sessionStorage.getItem('currentUser') || '{"userId":"","token":""}').token,
          },
        },
      };
    },
  ],
};

/**
 * 获取初始数据
 */
/* export const getInitialState = async () => {
  const envPrefix = process.env.NODE_ENV === 'development' ? config.basePrefix.dev : config.basePrefix.pro;
  const url = `${envPrefix}/basedata/dict/allDict`;
  // 获取数据字典
  const dictionary = await umiRequest(url, {
    skipErrorHandler: true,
  });
  return dictionary.data || {};
};*/
