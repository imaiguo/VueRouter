import { createApp } from 'vue'
import Transitions from './components/Transitions.vue'
import router from './router/TransitionsRoutes'

const app = createApp(Transitions)

app.use(router)

app.mount('#Transitions')
