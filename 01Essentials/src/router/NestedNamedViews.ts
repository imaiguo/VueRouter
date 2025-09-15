
import { createRouter, createWebHistory } from 'vue-router'
import UserSettings from '../views/UserSettings.vue'
import UserEmailsSubscriptions from '../views/UserEmailsSubscriptions.vue'
import UserProfile from '../views/UserProfile.vue'
import UserProfilePreview from '../views/UserProfilePreview.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
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
    },
  ],
})
