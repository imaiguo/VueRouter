
import { createApp } from 'vue'
import NamedViews from './views/NamedViews.vue'
import router from './router/NamedViews'

const app = createApp(NamedViews).use(router)
app.mount('#NamedViews')
