import './assets/main.css'

import { createApp } from 'vue'
import App from './Main.vue'
import router from './router/MainRouter'

const app = createApp(App)

app.use(router)

app.mount('#app')
