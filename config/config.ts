/**
 * 这里是umi的配置
 */
import { defineConfig } from 'umi';
import { resolve, join } from 'path';
import theme from '../src/theme/theme.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  theme,
  title: false,
  favicon: '/favicon.ico',
  proxy: {
    '/api/dev': {
      target: 'http://192.168.214.191:18741/',
      changeOrigin: true,
      pathRewrite: { '^/api/dev': '' },
    },
  },
  chainWebpack(config) {
    config.resolve.alias.set('@config', resolve('config'));
  },
});
