<template>
  <div class="" :class="isDarkMode ? 'is_dark' : ''">
    <BaseHeader @toggle-theme="toggleTheme" :isDarkMode="isDarkMode" />

    <section class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="heading">Register</h3>
          </div>
          <div class="col-md-6">
            <ul class="breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li><p class="fs-18">/</p></li>
              <li><p class="fs-18">Register</p></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="register">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
            <div class="flat-tabs">
              <ul class="menu-tab">
                <li class="active"><h6 class="fs-16">Email</h6></li>
                <li><h6 class="fs-16">Mobile</h6></li>
              </ul>

              <div class="content-tab">
                <div class="content-inner">
                  <h3 class="text-center mb-4">Create New Account</h3>

                  <!-- 注册表单 -->
                  <form @submit.prevent="handleRegister">
                    <div class="form-group">
                      <input
                        v-model="form.name"
                        type="text"
                        class="form-control"
                        placeholder="Full name"
                        required
                      />
                    </div>

                    <div class="form-group">
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

                    <div class="form-check mb-4">
                      <input
                        v-model="form.agreeTerms"
                        type="checkbox"
                        class="form-check-input"
                        id="termsCheck"
                      />
                      <label class="form-check-label" for="termsCheck">
                        I agree to the <a href="#" class="text-primary">Terms of Service</a>
                      </label>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
                      <span v-if="loading">Creating account...</span>
                      <span v-else>Create Account</span>
                    </button>
                  </form>

                  <div class="text-center mt-4">
                    <span class="text-muted">Already have an account? </span>
                    <router-link to="/login" class="text-primary"> Login here </router-link>
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
  name: 'UseRegister',
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
        name: '',
        email: '',
        password: '',
        agreeTerms: false,
      },
      loading: false,
      error: null,
    }
  },
  methods: {
    async handleRegister() {
      this.loading = true
      try {
        // 调用注册API
        await this.$store.dispatch('auth/register', this.form)
        this.$router.push('/dashboard')
      } catch (error) {
        this.error = error.response?.data?.message || 'Registration failed'
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style>
@import '@/assets/scss/app.scss';
/* 保留原有样式 */
/* .card {
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.btn-primary {
  background-color: #3772ff;
  border-color: #3772ff;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  opacity: 0.9;
}

.form-check-label {
  font-size: 0.9rem;
} */
</style>