
// 导航故障

import { createApp } from 'vue'
import NavigationFailures from './components/NavigationFailures.vue'
import router from './router/NavigationFailuresRoute'

const app = createApp(NavigationFailures)

app.use(router)

app.mount('#NavigationFailures')
