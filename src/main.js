import Vue from 'vue'
import App from './App.vue'
import router from './router'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import './registerServiceWorker'

Vue.config.productionTip = false
UIkit.use(Icons)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')