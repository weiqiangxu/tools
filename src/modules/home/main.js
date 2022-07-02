import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';
import TDesign from 'tdesign-vue';
// 引入组件库全局样式资源
import 'tdesign-vue/es/style/index.css';
Vue.use(TDesign);
import VueRouter from 'vue-router'
import router from './routers'
Vue.config.productionTip = true
Vue.use(VueRouter);

import VueBus from 'vue-bus';
Vue.use(VueBus);
import { Message } from 'element-ui'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas,far)
import 'vue2-animate/dist/vue2-animate.min.css'
import svgIcon from '../../components/svgIcon';
Vue.component('svg-icon', svgIcon);
import TIcon from 'tdesign-vue/lib/icon';
Vue.component('t-icon', TIcon);
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
