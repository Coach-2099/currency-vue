import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePermissionStore = defineStore('permission', () => {
  // 存储后端返回的路由数据
  const routes = ref([])
  
  // 存储需要登录验证的路由
  const authRoutes = ref([])

  // 设置路由数据的方法
  const setRoutes = (newRoutes) => {
    routes.value = newRoutes
    authRoutes.value = newRoutes.filter(route => route.requiresAuth)
  }

  return { 
    routes,
    authRoutes,
    setRoutes
  }
})