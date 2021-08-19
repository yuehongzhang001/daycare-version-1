import Vue from 'vue'
import ADMIN from './ADMIN.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router-admin'
import '@/assets/style/site.css'
import VueQuillEditor from 'vue-quill-editor'
import locale from 'element-ui/lib/locale/lang/en.js'
// require styles

import 'quill/dist/quill.core.css'

import 'quill/dist/quill.snow.css'

import 'quill/dist/quill.bubble.css'

Vue.use(ElementUI,{locale});
Vue.config.productionTip = false
Vue.use(VueQuillEditor, /* { default global options } */)

new Vue({
  render: h => h(ADMIN),
  router,
}).$mount('#admin')

