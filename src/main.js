import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Menu from './Menu.vue'
import $ from 'jquery'
import AppIframe from './assets/app-iframe.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

new Vue({
  render: h => h(Menu),
  updated:function(){
    console.log('加载完毕');
  },
  mounted:function(){
  //$(".be-scroller").perfectScrollbar()
    console.log('挂载完毕');
    AppIframe.init();
    $(function(){});
  },
  router
}).$mount('#menu');
