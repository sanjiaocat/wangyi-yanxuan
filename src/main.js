import Vue from 'vue';
import App from './App.vue';
import 'lib-flexible';
import router from './router';
import store from './store/index';
import './mockData/mockServer'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),    //注册组件
  router,             //注册路由器
  store                 //注册vuex
}).$mount('#app')              //挂载页面
