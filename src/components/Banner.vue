<template>
  <section class="banner">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-12">
          <div class="banner__content">
            <h2 class="title">Buy & Sell Digital Assets In The Rockie</h2>
            <p class="fs-20 desc">
              Coin rockie is the easiest, safest, and fastest way to buy & sell crypto asset
              exchange.
            </p>
            <a href="#" class="btn-action"><span>Get started now</span></a>
            <div class="partner">
              <h6>Our Partners</h6>
              <div class="partner__list">
                <Swiper
                  :modules="[SwiperAutoplay]"
                  :slides-per-view="4"
                  :space-between="20"
                  :loop="true"
                  :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                  }"
                  class="swiper-partner"
                >
                  <SwiperSlide>
                    <!-- <a href="#"><img src="@/assets/images/partner/logo-01.png" alt="" /></a> -->
                  </SwiperSlide>
                  <SwiperSlide>
                    <!-- <a href="#"><img src="@/assets/images/partner/logo-02.png" alt="" /></a> -->
                  </SwiperSlide>
                  <SwiperSlide>
                    <!-- <a href="#"><img src="@/assets/images/partner/logo-03.png" alt="" /></a> -->
                  </SwiperSlide>
                  <SwiperSlide>
                    <!-- <a href="#"><img src="@/assets/images/partner/logo-04.png" alt="" /></a> -->
                  </SwiperSlide>
                  <SwiperSlide>
                    <!-- <a href="#"><img src="@/assets/images/partner/logo-01.png" alt="" /></a> -->
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-12">
          <div class="banner__image">
            <!-- <img src="@/assets/images/layout/banner-01.png" alt="" /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

export default {
  name: 'BaseBanner',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      SwiperAutoplay: Autoplay,
    }
  },
}
</script>
