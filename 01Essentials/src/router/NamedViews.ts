
import { createRouter, createWebHistory } from 'vue-router'

// 命名路由
import First from '../views/First.vue'
import Second from '../views/Second.vue'
import Third from '../views/Third.vue'

// 2. 嵌入式路由
import UserSettings from '../views/UserSettings.vue'
import UserEmailsSubscriptions from '../views/UserEmailsSubscriptions.vue'
import UserProfile from '../views/UserProfile.vue'
import UserProfilePreview from '../views/UserProfilePreview.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // a single route can define multiple named components
      // which will be rendered into <router-view>s with corresponding names.
      components: {
        default: First,
        a: Second,
        b: Third,
      },
    },
    {
      path: '/other',
      components: {
        default: Third,
        a: Second,
        b: First,
      },
    },
    {
        path: '/settings',
        // You could also have named views at tho top
        component: UserSettings,
        children: [
          {
            path: 'emails',
            component: UserEmailsSubscriptions,
          },
          {
            path: 'profile',
            components: {
              default: UserProfile,
              helper: UserProfilePreview,
            },
          },
        ],
      }
  ]
})

export default router
