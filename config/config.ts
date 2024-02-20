import { defineConfig } from '@umijs/max';
import proxy from './proxy';
import routes from './routes';

export default defineConfig({
  antd: {
    configProvider: {},
  },
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
    locale: false,
  },
  routes,
  proxy,
  npmClient: 'pnpm',
  reactQuery: {},
  styledComponents: {},
});
