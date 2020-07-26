import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'

import Sample from './components/Sample.vue'
import CountEvent from './components/CountEvent.vue'
import Form from './components/Form.vue'
import ShowData from './components/ShowData.vue'
import CurdView from './components/CurdView.vue'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false

import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax, {})

Vue.component('sample',Sample)
Vue.component('count',CountEvent)
Vue.component('Forml',Form)
Vue.component('show',ShowData)
Vue.component('curd',CurdView)

new Vue({
  render: h => h(App),
}).$mount('#app')
