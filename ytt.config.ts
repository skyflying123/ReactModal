import { Config } from 'yapi-to-typescript';
import baseConfig from './config/baseConfig';

const config: Config = [
  {
    // YApi 服务地址
    serverUrl: baseConfig.yApi,
    // 是否只生成接口请求内容和返回内容的 TypeSript 类型，是则请求文件和请求函数都不会生成
    typesOnly: true,
    // 支持生成 React Hooks 代码的相关配置
    reactHooks: {
      enabled: true,
    },
    // 生产环境名称
    // 用于获取生产环境域名
    // 获取方式：打开项目 --> 设置 --> 环境配置 --> 点开或新增生产环境 --> 复制生产环境名称
    // prodEnvName: '',
    // 输出文件路径
    // 可以是 相对路径 或 绝对路径
    // outputFilePath: 'src/api/index.js',
    // 请求函数文件路径
    // requestFunctionFilePath: 'src/api/request.ts',
    // 如果接口响应的结果是 JSON 对象， 且我们想要的数据在该对象下， 那我们就可将 dataKey 设为我们想要的数据对应的键。
    // 比如该对象为 { code: 0, msg: '成功', data: 100 }， 我们想要的数据为 100， 则我们可将 dataKey 设为 data。
    dataKey: 'root',
    // 项目列表
    projects: [
      /**
       * outputFilePath赋值规则：src/interfaces/api/${模块名}.ts
       */
      {
        token: 'ab2a2e63bcf9446a4242280e26fde17965958a9459ae30dbbe47b97241eed91c',
        categories: [
          /** **************************用户模块****************************************/
          {
            id: 2272,
            outputFilePath: 'src/services/apis/user/user.d.ts',
            getRequestFunctionName(interfaceInfo, changeCase): string {
              return changeCase.camelCase(interfaceInfo.path);
            },
          },
          /** **************************菜单模块****************************************/
          {
            id: 2278,
            outputFilePath: 'src/services/apis/menu/menu.d.ts',
            getRequestFunctionName(interfaceInfo, changeCase): string {
              return changeCase.camelCase(interfaceInfo.path);
            },
          },
          /** **************************系统管理模块****************************************/
          {
            id: 2284,
            outputFilePath: 'src/services/apis/systemManager/systemManager.d.ts',
            getRequestFunctionName(interfaceInfo, changeCase): string {
              return changeCase.camelCase(interfaceInfo.path);
            },
          },
        ],
      },
    ],
  },
];

export default config;
