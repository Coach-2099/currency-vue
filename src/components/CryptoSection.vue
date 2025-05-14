<template>
  <section class="crypto" data-aos="fade-up" data-aos-duration="1000">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="crypto__main">
            <div class="flat-tabs">
              <ul class="menu-tab">
                <li
                  v-for="(tab, index) in tabs"
                  :key="index"
                  :class="{ active: activeTab === index }"
                  @click="activeTab = index"
                >
                  <h6 class="fs-16">{{ tab }}</h6>
                </li>
              </ul>
              <div class="content-tab">
                <div
                  v-for="(content, index) in tabContents"
                  :key="index"
                  class="content-inner"
                  v-show="activeTab === index"
                >
                  <div
                    v-for="(crypto, cryptoIndex) in cryptos"
                    :key="cryptoIndex"
                    class="crypto-box"
                    :class="{ active: cryptoIndex === 1 && index === 0 }"
                  >
                    <div class="top">
                      <a href="#">
                        <span :class="crypto.icon"
                          ><span class="path1"></span><span class="path2"></span
                        ></span>
                        <span>{{ crypto.name }}</span>
                        <span class="unit">{{ crypto.unit }}</span>
                      </a>
                    </div>
                    <h6 class="price">{{ crypto.price }}</h6>
                    <div class="bottom">
                      <p>{{ crypto.value }}</p>
                      <div :class="['sale', crypto.change > 0 ? 'success' : 'critical']">
                        {{ crypto.change > 0 ? '+' : '' }}{{ crypto.change }}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CryptoSection',
  setup() {
    const activeTab = ref(0)
    const tabs = [
      'Crypto',
      'DeFi',
      'BSC',
      'NFT',
      'Metaverse',
      'Polkadot',
      'Solana',
      'Opensea',
      'Makersplace',
    ]

    const cryptos = [
      {
        name: 'Bitcoin',
        unit: 'BTC/USD',
        price: 'USD 46,168.95',
        value: '36,641.20',
        change: -0.79,
        icon: 'icon-btc',
      },
      {
        name: 'Ethereum',
        unit: 'ETH/USD',
        price: 'USD $3,480.04',
        value: '36,641.20',
        change: 10.55,
        icon: 'icon-eth',
      },
      {
        name: 'Tether',
        unit: 'USDT/USD',
        price: 'USD 1.00',
        value: '36,641.20',
        change: -0.01,
        icon: 'icon-tether',
      },
      {
        name: 'BNB',
        unit: 'BNB/USD',
        price: 'USD 443.56',
        value: '36,641.20',
        change: -1.24,
        icon: 'icon-bnb',
      },
    ]

    // Create tab content for all tabs (dummy data for demo purposes)
    const tabContents = Array(tabs.length).fill(cryptos)

    return {
      activeTab,
      tabs,
      cryptos,
      tabContents,
    }
  },
}
</script>
