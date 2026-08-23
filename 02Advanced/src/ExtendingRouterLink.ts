
import { createApp } from 'vue'
import ExtendingRouterLink from './components/ExtendingRouterLinkComponent.vue'
import router from './router/ExtendingRouterLinkRoute'

const app = createApp(ExtendingRouterLink)

app.use(router)

app.mount('#ExtendingRouterLink')