<template>
  <section class="about">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-12">
          <div class="about_image">
            <swiper
              :modules="[SwiperPagination]"
              :pagination="{ clickable: true }"
              class="img-swiper"
              :slides-per-view="1"
              :direction="'horizontal'"
            >
              <swiper-slide>
                <img class="img-main" src="@/assets/images/layout/about-h1.png" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img class="img-main" src="@/assets/images/layout/about-h1.png" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img class="img-main" src="@/assets/images/layout/about-h1.png" alt="" />
              </swiper-slide>
              <swiper-slide>
                <img class="img-main" src="@/assets/images/layout/about-h1.png" alt="" />
              </swiper-slide>
            </swiper>

            <img class="icon icon-1" src="@/assets/images/icon/icon-01.png" alt="" />
            <img class="icon icon-2" src="@/assets/images/icon/icon-02.png" alt="" />
            <img class="icon icon-3" src="@/assets/images/icon/icon-03.png" alt="" />
            <img class="icon icon-4" src="@/assets/images/icon/icon-04.png" alt="" />
            <img class="icon icon-5" src="@/assets/images/icon/icon-05.png" alt="" />
          </div>
        </div>
        <div class="col-xl-6 col-md-12">
          <div class="about__content" data-aos="fade-up" data-aos-duration="1000">
            <h3 class="heading">What Is Rockie</h3>
            <p class="fs-20 decs">
              Experience a variety of trading on Bitcost. You can use various types of coin
              transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.
            </p>
            <ul class="list">
              <li v-for="(item, index) in aboutList" :key="index">
                <h6 class="title"><span class="icon-check"></span>{{ item.title }}</h6>
                <p class="text">
                  {{ item.description }}
                </p>
              </li>
            </ul>
            <a href="#" class="btn-action">Explore More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

export default {
  name: 'AboutSection',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const aboutList = [
      {
        title: 'View real-time cryptocurrency prices',
        description:
          'Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.',
      },
      {
        title: 'Buy and sell BTC, ETH, XRP, OKB, Etc...',
        description:
          'Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.',
      },
    ]

    return {
      aboutList,
      SwiperPagination: Pagination,
    }
  },
}
</script>
