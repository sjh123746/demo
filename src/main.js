// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import debounce from './utils/bounce'
import store from './store/index';
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts'
 
Vue.prototype.$echarts = echarts
Vue.directive('debounceClick', {
  bind(el, binding, vnode, oldvnode) {},
  inserted: function (el, binding) {
    let delayTime = el.getAttribute('delay-time') || 1500
    el.onclick = debounce(function () {
      binding.value()
    }, delayTime)
  },
})

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.axios = axios;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
