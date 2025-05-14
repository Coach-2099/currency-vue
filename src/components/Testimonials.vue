<template>
  <section class="testimonials">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-12">
          <div class="block-text">
            <h3 class="heading">Our customers love what we do</h3>
            <h6 class="fs-20">Transform Your idea into Reality With Finsweet</h6>
            <p>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout.
            </p>

            <Swiper class="swiper-thumb1">
              <div class="swiper-wrapper list-img">
                <SwiperSlide v-for="(thumb, index) in testimonialThumbs" :key="index">
                  <img :src="require(`@/assets/images/avt/${thumb}`)" alt="" />
                </SwiperSlide>
              </div>
            </Swiper>
            <div class="couter">
              <h6>30+</h6>
              <p class="title">Customer Reviews</p>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-12">
          <Swiper :modules="[SwiperNavigation]" :navigation="true" class="swiper-testimonial-1">
            <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
              <div class="testimonials-box">
                <span class="icon-quote"></span>
                <h6 class="text">
                  {{ testimonial.text }}
                </h6>
                <div class="bottom">
                  <div class="info">
                    <img :src="require(`@/assets/images/avt/${testimonial.avatar}`)" alt="" />
                    <div class="content">
                      <h6 class="name">{{ testimonial.name }}</h6>
                      <p class="position">{{ testimonial.position }}</p>
                    </div>
                  </div>
                  <img src="@/assets/images/partner/logo-05.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

export default {
  name: 'BaseTestimonials',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const testimonialThumbs = ['avt-02.png', 'avt-03.png', 'avt-04.png']

    const testimonials = [
      {
        text: '"Great course I really enjoyed it and the course was way easy to learn with very good explanations of the code, I could easily understand and develop applications with the knowledge gathered during the course."',
        name: 'Johnny Andro',
        position: 'Director, Company',
        avatar: 'avt-02.png',
      },
      {
        text: '"Great course I really enjoyed it and the course was way easy to learn with very good explanations of the code, I could easily understand and develop applications with the knowledge gathered during the course."',
        name: 'Johnny Andro',
        position: 'Director, Company',
        avatar: 'avt-03.png',
      },
      {
        text: '"Great course I really enjoyed it and the course was way easy to learn with very good explanations of the code, I could easily understand and develop applications with the knowledge gathered during the course."',
        name: 'Johnny Andro',
        position: 'Director, Company',
        avatar: 'avt-04.png',
      },
    ]

    return {
      testimonialThumbs,
      testimonials,
      SwiperNavigation: Navigation,
    }
  },
}
</script>
