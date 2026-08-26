import { createApp } from 'vue'
import DynamicRouting from './components/DynamicRouting.vue'
import router from './router/DynamicRoutingRoutes'

const app = createApp(DynamicRouting)

app.use(router)

app.mount('#DynamicRouting')
