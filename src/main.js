import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto'
import mixpanel from 'mixpanel-browser'

// Vue dependencies
Vue.use(Buefy)
Vue.use(VueScrollTo)
Vue.config.productionTip = false

// Provider dependencies
mixpanel.init(
  process.env.NODE_ENV === 'development'
    ? '3067ce3aad9fb357f742a5912fff5213'
    : '044636f64247166b575173cdebac6d43'
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
