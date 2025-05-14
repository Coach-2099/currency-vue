import { createRouter, createWebHistory } from 'vue-router'
import { usePermissionStore } from '@/stores/permission'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue'),
    },
    {
      path: '/userProfile',
      name:'userProfile',
      component: () => import('../views/userProfile.vue'),
    }
    // ...generateAsyncRoutes()
  ],
})

// 动态生成路由
// function generateAsyncRoutes() {
//   const permissionStore = usePermissionStore()
//   return permissionStore.routes.map(route => ({
//     path: route.path,
//     name: route.name,
//     component: () => import(`@/views/${route.component}`),
//     meta: {
//       requiresAuth: route.requiresAuth,
//       roles: route.roles
//     }
//   }))
// }

// 添加路由守卫
router.beforeEach(async (to) => {
  const permissionStore = usePermissionStore()
  // hasToken()
  // if (to.meta.requiresAuth && !hasToken()) {
  if (to.meta.requiresAuth) {
    return '/login'
  }
  
  if (permissionStore.routes.length === 0) {
    // 调用接口获取路由数据
    // const { data } = await getRoutesAPI()
    // permissionStore.setRoutes(data)
    // router.addRoute(generateAsyncRoutes())
  }
})

export default router
