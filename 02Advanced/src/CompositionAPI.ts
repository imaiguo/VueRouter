
import { createApp } from 'vue'
import NavigationGuards from './components/CompositionAPIComponent.vue'
import router from './router/CompositionAPIRoute'

const app = createApp(NavigationGuards)

app.use(router)

app.mount('#CompositionAPI')