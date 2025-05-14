<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__main">
        <div class="row">
          <div class="col-xl-4 col-md-8">
            <div class="info">
              <a href="#" class="logo">
                <img src="@/assets/images/logo/log-footer.png" alt="" />
              </a>
              <h6>Let's talk! 🤙</h6>
              <ul class="list">
                <li><p>+12 345 678 9101</p></li>
                <li><p>Info.Avitex@Gmail.Com</p></li>
                <li>
                  <p>Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522</p>
                </li>
              </ul>
            </div>
          </div>
          <div v-for="(column, index) in footerColumns" :key="index" :class="column.class">
            <div :class="column.widgetClass">
              <h6 class="title">{{ column.title }}</h6>
              <ul>
                <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
                  <a :href="link.url">{{ link.text }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid bg">
      <div class="footer__bottom">
        <p>Copyright © 2022 Themesflat</p>
        <ul class="list-social">
          <li v-for="(social, index) in socialLinks" :key="index">
            <a :href="social.url"><i :class="social.icon"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter',
  setup() {
    const footerColumns = [
      {
        title: 'PRODUCTS',
        class: 'col-xl-2 col-md-4',
        widgetClass: 'widget-link s1',
        links: [
          { text: 'Spot', url: '#' },
          { text: 'Inverse Perpetual', url: '#' },
          { text: 'USDT Perpetual', url: '#' },
          { text: 'Exchange', url: '#' },
          { text: 'Launchpad', url: '#' },
          { text: 'Binance Pay', url: '#' },
        ],
      },
      {
        title: 'SERVICES',
        class: 'col-xl-2 col-md-4',
        widgetClass: 'widget-link s2',
        links: [
          { text: 'Buy Crypto', url: '#' },
          { text: 'Markets', url: '#' },
          { text: 'Tranding Fee', url: '#' },
          { text: 'Affiliate Program', url: '#' },
          { text: 'Referral Program', url: '#' },
          { text: 'API', url: '#' },
        ],
      },
      {
        title: 'SUPPORT',
        class: 'col-xl-2 col-md-4',
        widgetClass: 'widget-link s3',
        links: [
          { text: 'Bybit Learn', url: '#' },
          { text: 'Help Center', url: '#' },
          { text: 'User Feedback', url: '#' },
          { text: 'Submit a request', url: '#' },
          { text: 'API Documentation', url: '#' },
          { text: 'Trading Rules', url: '#' },
        ],
      },
      {
        title: 'ABOUT US',
        class: 'col-xl-2 col-md-4',
        widgetClass: 'widget-link s4',
        links: [
          { text: 'About Bybit', url: '#' },
          { text: 'Authenticity Check', url: '#' },
          { text: 'Careers', url: '#' },
          { text: 'Business Contacts', url: '#' },
          { text: 'Blog', url: '#' },
        ],
      },
    ]

    const socialLinks = [
      { icon: 'fa-brands fa-facebook', url: '#' },
      { icon: 'fa-brands fa-twitter', url: '#' },
      { icon: 'fa-brands fa-instagram', url: '#' },
      { icon: 'fa-brands fa-linkedin', url: '#' },
    ]

    return {
      footerColumns,
      socialLinks,
    }
  },
}
</script>