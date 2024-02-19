import { defineConfig } from '@umijs/max';
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
  npmClient: 'pnpm',
  tailwindcss: {},
  reactQuery: {},
});
