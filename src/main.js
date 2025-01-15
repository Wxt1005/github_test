import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入 Element UI
import ElementUI from 'element-ui';
// 引入 Element UI 样式
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";

Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
