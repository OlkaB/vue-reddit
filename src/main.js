import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/axios'
import { useFilters } from './filters/filters'

Vue.config.productionTip = false
useFilters(Vue)

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
