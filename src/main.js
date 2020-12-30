import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Vuetify)
const vuetify = new Vuetify()
const token = localStorage.getItem('token')

if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
