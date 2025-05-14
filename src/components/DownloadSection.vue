<template>
  <section class="download">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-12">
          <div class="download__content" data-aos="fade-up" data-aos-duration="1000">
            <h3 class="heading">Free your money & Invest with confident</h3>
            <p class="fs-20 decs">
              With Cryptor Trade, you can be sure your trading skills are matched
            </p>
            <ul class="list">
              <li v-for="(item, index) in downloadList" :key="index">
                <h6 class="title"><span class="icon-check"></span>{{ item.title }}</h6>
                <p class="text">
                  {{ item.description }}
                </p>
              </li>
            </ul>
            <div class="group-button">
              <a href="#"><img src="@/assets/images/icon/googleplay.png" alt="" /></a>
              <a href="#"><img src="@/assets/images/icon/appstore.png" alt="" /></a>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-md-12">
          <div class="download__image">
            <div class="button">Scan To Download</div>
            <img src="@/assets/images/layout/download.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DownloadSection',
  setup() {
    const downloadList = [
      {
        title: 'Buy, Sell, And Trade On The Go',
        description: 'Managa your holdings from your mobile decive',
      },
      {
        title: 'Take Control Of Your Wealth',
        description: 'Rest assured you (and only you) have access to your funds',
      },
    ]

    return {
      downloadList,
    }
  },
}
</script>