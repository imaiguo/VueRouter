
import { createApp } from 'vue'
import LazyLoading from './components/LazyLoadingComponent.vue'
import router from './router/LazyLoadingRoute'

const app = createApp(LazyLoading)

app.use(router)

app.mount('#LazyLoading')