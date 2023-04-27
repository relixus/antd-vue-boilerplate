import Antd from 'ant-design-vue';
import router from '../router';
import pinia from '../store';

export function registerPlugins (app) {
    app
      .use(Antd)
      .use(router)
      .use(pinia)
  }