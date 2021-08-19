import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import '@/assets/style/site.css'
import locale from 'element-ui/lib/locale/lang/en.js'

Vue.use(ElementUI,{locale});
Vue.config.productionTip = false
Vue.prototype.URL = function () {
  return 'http://15.222.62.243:9000';
};
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


