import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router/index.js';

import 'common/stylus/index.styl';

Vue.config.productionTip = false;
Vue.use(VueRouter, VueAxios, Axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
