import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import SongService from './services/SongService'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faHeart, faBell, faEllipsisV, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Global components for fontawesome icons (probably not the best idea)
library.add(faSearch, faHeart, faBell, faEllipsisV, faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

async function getUser() {
  try {
    const response = await axios.get('http://localhost:8081/random');
    return (response.data);
  } catch (error) {
  }
}

console.log(getUser())