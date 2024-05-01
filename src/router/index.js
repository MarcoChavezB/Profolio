import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'
import path from 'path'
import story from '../components/personal/story.vue'
import hobbies from '../components/personal/hobbies.vue'
import education from '../components/personal/education.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: "",
        component: PrincipalView,
        children: [
            {
                path: "",
                component: story
            },
            {
                path: "/personal/hobbies",
                component: hobbies
            },
            {
                path: "/personal/education",
                component: education
            },
        ]

    }
  ]
})

export default router
