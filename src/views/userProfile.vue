<template>
  <div :class="isDarkMode ? 'is_dark' : ''">
    <BaseHeader @toggle-theme="toggleTheme" :isDarkMode="isDarkMode" />

    <main class="main">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="card profile-sidebar">
              <div class="card-body">
                <div class="profile-avatar text-center">
                  <img
                    :src="user.avatar || 'assets/images/avatars/default-avatar.png'"
                    class="rounded-circle"
                    width="120"
                    height="120"
                    alt="User Avatar"
                  />
                  <h5 class="mt-3">{{ user.name }}</h5>
                  <p class="text-muted">{{ user.email }}</p>
                </div>

                <nav class="nav flex-column profile-nav">
                  <router-link to="/profile" class="nav-link active" exact-active-class="active">
                    <i class="bx bx-user"></i> 个人信息
                  </router-link>
                  <router-link to="/profile/security" class="nav-link" exact-active-class="active">
                    <i class="bx bx-lock-alt"></i> 账户安全
                  </router-link>
                  <router-link
                    to="/profile/transactions"
                    class="nav-link"
                    exact-active-class="active"
                  >
                    <i class="bx bx-transfer"></i> 交易记录
                  </router-link>
                </nav>
              </div>
            </div>
          </div>

          <div class="col-lg-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </main>

    <SaleSection />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue'
import SaleSection from '@/components/SaleSection.vue'
import BaseFooter from '@/components/BaseFooter.vue'
export default {
  name: 'userProfile',
  components: {
    BaseHeader,
    SaleSection,
    BaseFooter,
  },
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john@example.com',
        avatar: '',
        verified: true,
      },
    }
  },
  created() {
    this.fetchUserProfile()
  },
  methods: {
    async fetchUserProfile() {
      try {
        const response = await this.$http.get('/api/user/profile')
        this.user = response.data
      } catch (error) {
        console.error('获取用户信息失败:', error)
      }
    },
  },
}
</script>

<style>
@import '@/assets/scss/app.scss';
.profile-sidebar {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.profile-nav .nav-link {
  color: #6c757d;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.profile-nav .nav-link.active {
  background-color: #f8f9fa;
  color: #3772ff;
  font-weight: 500;
}

.profile-nav .nav-link:hover:not(.active) {
  background-color: #f8f9fa;
}
</style>