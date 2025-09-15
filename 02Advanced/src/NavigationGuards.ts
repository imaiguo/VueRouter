import './assets/main.css'

import { createApp } from 'vue'
import NavigationGuards from './components/NavigationGuards.vue'
import router from './router/MainRouter'

const app = createApp(NavigationGuards)

app.use(router)

app.mount('#NavigationGuards')
