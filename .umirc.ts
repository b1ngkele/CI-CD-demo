import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  base: './',
  publicPath: './',
  hash: true,
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
