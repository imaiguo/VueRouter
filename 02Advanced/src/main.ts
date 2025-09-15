import './assets/main.css'

import { createApp } from 'vue'
import Main from './Main.vue'
import router from './router/MainRouter'

const app = createApp(Main)

app.use(router)

app.mount('#app')
