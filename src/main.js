import './assets/scss/main.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { createApp } from 'vue'
import App from './App.vue'

library.add(fas,fab)

createApp(App)
    .component('fa', FontAwesomeIcon )
    .mount('#app')
