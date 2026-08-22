import { createApp } from 'vue'
import ScrollBehavior from './components/ScrollBehavior.vue'
import router from './router/ScrollBehaviorRoutes'

const app = createApp(ScrollBehavior)

app.use(router)

app.mount('#ScrollBehavior')
