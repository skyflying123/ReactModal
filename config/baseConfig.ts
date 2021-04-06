import { Settings, FooterProps } from '@ant-design/pro-layout';

/**
 * 这里是项目基本配置
 */

interface BaseConfig {
  // 首页路由配置(多角色首页 {角色名:对应的首页路径} )
  home: { [K in string]: string } & { default: string };
  // 布局配置
  layout: Settings & { [K in string]: any };
  // 页脚设置
  foot: FooterProps;
  // websocket地址配置
  websocket?: string[];
  // 项目前缀设置
  basePrefix: {
    // mock 前缀
    mock: string;
    // 开发前缀
    dev: string;
    // 生产前缀
    pro: string;
  };
  // 约定如果调用接口成功时后端返回的code
  successCode: string;
  // yapi服务地址
  yApi: string;
  // 后端多模块对应的接口地址(如果后端不是多模块服务就不用配置)
  backEndModuleUrl: {
    default?: string;
    // 鉴权
    authenticate: string;
  };
}

const baseConfig: BaseConfig = {
  layout: {
    // 主题
    navTheme: 'dark',
    // 内容模式
    contentWidth: 'Fluid',
    // 是否固定 header 到顶部
    fixedHeader: true,
    // 是否固定导航
    fixSiderbar: false,
    // 关闭菜单国际化
    menu: {
      locale: false,
    },
    // layout 的左上角 的 title
    title: '',
    // layout 的菜单模式,side：右侧导航，top：顶部导航
    layout: 'side',
    // 使用 IconFont 的图标配置
    iconfontUrl: '',
    // 主题色配置
    primaryColor: '#DC143C',
  },
  foot: {
    copyright: 'shc',
    links: [
      {
        key: 'shc',
        title: '上海清算所',
        href: 'https://www.shclearing.com/',
        blankTarget: true,
      },
    ],
  },
  home: {
    default: '/systemManager/jobManager/jobInfo',
  },
  websocket: ['ws://192.168.214.191:18796/lsqt-websocket/'],
  basePrefix: {
    mock: '',
    dev: '/api/dev',
    pro: '/api/pro',
  },
  successCode: '0',
  yApi: 'http://192.168.214.111:40000',
  backEndModuleUrl: {
    default: '',
    // 权限及用户管理
    authenticate: 'authenticate',
  },
};

export default baseConfig;
