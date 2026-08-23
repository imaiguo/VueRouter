import { createApp } from 'vue'
import Routetype from './components/Routetype.vue'
import router from './router/RoutetypeRoutes'

const app = createApp(Routetype)

app.use(router)

app.mount('#Routetype')
