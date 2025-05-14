<template>
  <div class="" :class="isDarkMode ? 'is_dark' : ''">
    <BaseHeader @toggle-theme="toggleTheme" :isDarkMode="isDarkMode" />

    <section class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="heading">Login</h3>
          </div>
          <div class="col-md-6">
            <ul class="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><p class="fs-18">/</p></li>
              <li><p class="fs-18">Login</p></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="register login">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
            <div class="flat-tabs">
              <ul class="menu-tab">
                <li @click="clickType('email')" :class="type == 'email' ? 'active' : ''">
                  <h6 class="fs-16">Email</h6>
                </li>
                <li @click="clickType('mobile')" :class="type == 'mobile' ? 'active' : ''">
                  <h6 class="fs-16">Mobile</h6>
                </li>
              </ul>

              <div class="content-tab">
                <div class="content-inner">
                  <h3 class="text-center mb-4">Login to Your Account</h3>

                  <form @submit.prevent="handleLogin">
                    <div v-if="type == 'mobile'" class="form-group">
                      <div>
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option>+1</option>
                          <option>+84</option>
                          <option>+82</option>
                          <option>+32</option>
                        </select>
                        <input type="text" class="form-control" placeholder="Your Phone number" />
                      </div>
                    </div>

                    <div v-if="type == 'email'" class="form-group">
                      <input
                        v-model="form.email"
                        type="email"
                        class="form-control"
                        placeholder="Email address"
                        required
                      />
                    </div>

                    <div class="form-group">
                      <input
                        v-model="form.password"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        required
                      />
                    </div>

                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <div class="form-check">
                        <input
                          v-model="form.remember"
                          type="checkbox"
                          class="form-check-input"
                          id="rememberMe"
                        />
                        <label class="form-check-label" for="rememberMe"> Remember me </label>
                      </div>
                      <a href="#" class="text-primary">Forgot password?</a>
                    </div>

                    <button type="submit" class="btn-action">Login</button>
                  </form>

                  <div class="text-center mt-4">
                    <span class="text-muted">Don't have an account? </span>
                    <router-link to="/register" class="text-primary"> Create account </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SaleSection />
    <BaseFooter />
  </div>
</template>
<script>
import { ref } from 'vue'
import BaseHeader from '@/components/BaseHeader.vue'
import SaleSection from '@/components/SaleSection.vue'
import BaseFooter from '@/components/BaseFooter.vue'
export default {
  name: 'UserLogin',
  components: {
    BaseHeader,
    SaleSection,
    BaseFooter,
  },
  setup() {
    const isDarkMode = ref(false)

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value
    }

    return {
      isDarkMode,
      toggleTheme,
    }
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false,
      },
      loading: false,
      type: 'email',
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true
      try {
        // 这里调用登录API
        await this.$store.dispatch('auth/login', this.form)
        this.$router.push('/dashboard')
      } catch (error) {
        console.error('Login failed:', error)
      } finally {
        this.loading = false
      }
    },
    clickType(str) {
      this.type = str
    },
  },
}
</script>
<style>
@import '@/assets/scss/app.scss';
/* 保留原有样式 */
.body {
  background: #f8f9fa;
  min-height: 100vh;
}

.card {
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.btn-primary {
  background-color: #3772ff;
  border-color: #3772ff;
}
</style>
