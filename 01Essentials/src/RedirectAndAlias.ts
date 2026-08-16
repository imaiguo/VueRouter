import { createApp } from 'vue'
import RedirectAndAlias from './components/RedirectAndAliasText.vue'
import router from './router/RedirectAndAliasRoute'

createApp(RedirectAndAlias).use(router).mount('#RedirectAndAlias')
