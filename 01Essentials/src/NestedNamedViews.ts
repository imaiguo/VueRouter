
import { createApp } from 'vue'
import NestedNamedViews from './views/NestedNamedViews.vue'
import { router } from './router/NestedNamedViews'

const app = createApp(NestedNamedViews).use(router)
app.mount('#NestedNamedViews')
