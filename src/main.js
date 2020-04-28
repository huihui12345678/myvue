// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config/test'
import { Datetime, Group } from 'vux' 
import VueI18n from 'vue-i18n'
import axios from 'axios'

import './assets/icon/iconfont.css' 
Vue.use(VueI18n)
Vue.component(Datetime.name, Datetime);  
Vue.component(Group.name, Group); 
Vue.config.productionTip = false
Vue.prototype.$axios = axios
//Vue.use(vuexI18n.plugin, store)
/* eslint-disable no-new */
new Vue({
//el: '#app',
router,
template: '<App/>',
components: { App }
}).$mount('#app')
//new Vue({
//	router,
//}).$mount('#app')