import Vue from 'vue'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faHeart, faBell, faEllipsisV, faStar, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Home from './views/Home.vue'
import Play from './views/Play.vue'
import HowTo from './views/HowTo.vue'
import App from './App.vue'

// Enabling vue-router
Vue.use(VueRouter)
const routes = [
    {path: '/', component: Home},
    {path: '/play:id', component: Play},
    {path: '/howto', component: HowTo}
]
const router = new VueRouter({
    routes: routes
})

// Global components for fontawesome icons (probably not the best idea)
library.add(faSearch, faHeart, faBell, faEllipsisV, faStar, faAngleDoubleLeft, faAngleDoubleRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')