import Vue from 'vue'
import App from './App.vue'
import router from './router'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import './registerServiceWorker'
import VueTuicalendar from '@lkmadushan/vue-tuicalendar'
import 'tui-calendar/dist/tui-calendar.min.css'


Vue.config.productionTip = false
UIkit.use(Icons)
Vue.use(VueTuicalendar)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')