<template>
  <div class="body header-fixed" :class="isDarkMode ? 'is_dark' : ''">
    <BaseHeader @toggle-theme="toggleTheme" :isDarkMode="isDarkMode" />
    <Banner />
    <CryptoSection />
    <CoinList />
    <HowItWorks />
    <AboutSection />
    <DownloadSection />
    <!-- <Testimonials /> -->
    <SaleSection />
    <BaseFooter />
  </div>
</template>

<script>
import { ref } from 'vue'
import BaseHeader from '@/components/BaseHeader.vue'
import Banner from '@/components/Banner.vue'
import CryptoSection from '@/components/CryptoSection.vue'
import CoinList from '@/components/CoinList.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import AboutSection from '@/components/AboutSection.vue'
import DownloadSection from '@/components/DownloadSection.vue'
// import Testimonials from '@/components/Testimonials.vue'
import SaleSection from '@/components/SaleSection.vue'
import BaseFooter from '@/components/BaseFooter.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
    Banner,
    CryptoSection,
    CoinList,
    HowItWorks,
    AboutSection,
    DownloadSection,
    // Testimonials,
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
}
</script>

<style>
/* Import the CSS directly in the top-level component */
@import '@/assets/scss/app.scss';
</style>