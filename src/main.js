import Vue from 'vue';
import App from './App.vue';

import './assets/css/cssreset.css';
// 路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from "./assets/js/router";
//mintui
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
// ui组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'mint-ui/lib/index';
import './assets/icon/iconfont.css';
Vue.use(Mint);
// 数据传参
import axios from 'axios'
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
