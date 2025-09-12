
import './assets/stylesA.css'

import { createApp } from 'vue'
import NamedRoutes from './components/NamedRoutes.vue'
import router from './router/NamedRoutes'

createApp(NamedRoutes).use(router).mount('#NamedRoutes')
