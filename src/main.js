import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import { registerPlugins } from './plugins';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');


