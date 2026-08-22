
import { createApp } from 'vue'
import NavigationGuards from './components/DataFetchingComponent.vue'
import router from './router/DataFetchingRoute'

const app = createApp(NavigationGuards)

app.use(router)

app.mount('#DataFetching')