<template>
  <section class="coin-list">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="block-text">
            <h3 class="heading">Market Update</h3>
            <a class="btn-action-2" href="#">See All Coins</a>
          </div>

          <div class="coin-list__main">
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
                  v-for="(content, index) in [1]"
                  :key="index"
                  class="content-inner"
                  v-show="activeTab === 0"
                >
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Last Price</th>
                        <th scope="col">24h %</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Last 7 Days</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(coin, coinIndex) in coins" :key="coinIndex">
                        <th scope="row">
                          <span class="icon-star" :class="{ active: coin.starred }"></span>
                        </th>
                        <td>{{ coinIndex + 1 }}</td>
                        <td>
                          <a href="#">
                            <span :class="coin.icon">
                              <span class="path1"></span>
                              <span class="path2"></span>
                              <span v-if="hasPath3(coin.icon)" class="path3"></span>
                              <span v-if="hasPath4(coin.icon)" class="path4"></span>
                              <span v-if="hasPath5(coin.icon)" class="path5"></span>
                              <span v-if="hasPath6(coin.icon)" class="path6"></span>
                              <span v-if="hasPath7(coin.icon)" class="path7"></span>
                              <span v-if="hasPath8(coin.icon)" class="path8"></span>
                              <span v-if="hasPath9(coin.icon)" class="path9"></span>
                            </span>
                            <span>{{ coin.name }}</span>
                            <span class="unit">{{ coin.unit }}</span>
                          </a>
                        </td>
                        <td class="boild">{{ coin.price }}</td>
                        <td :class="coin.change > 0 ? 'up' : 'down'">
                          {{ coin.change > 0 ? '+' : '' }}{{ coin.change }}%
                        </td>
                        <td class="boild">{{ coin.marketCap }}</td>
                        <td>
                          <div :id="'total-revenue-chart-' + (coinIndex + 1)"></div>
                        </td>
                        <td><a href="#" class="btn">Trade</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- Additional content tabs would go here -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'CoinList',
  setup() {
    const activeTab = ref(0)
    const tabs = ['View All', 'Metaverse', 'Entertainment', 'Energy', 'NFT', 'Gaming', 'Music']

    const coins = [
      {
        name: 'Bitcoin',
        unit: 'BTC',
        price: '$56,623.54',
        change: 1.45,
        marketCap: '$880,423,640,582',
        icon: 'icon-btc',
        starred: false,
      },
      {
        name: 'Ethereum',
        unit: 'ETH',
        price: '$56,623.54',
        change: -5.12,
        marketCap: '$880,423,640,582',
        icon: 'icon-eth',
        starred: false,
      },
      {
        name: 'BNB',
        unit: 'BNB/USD',
        price: '$56,623.54',
        change: -3.75,
        marketCap: '$880,423,640,582',
        icon: 'icon-bnb',
        starred: false,
      },
      {
        name: 'Tether',
        unit: 'USDT/USD',
        price: '$56,623.54',
        change: 1.45,
        marketCap: '$880,423,640,582',
        icon: 'icon-tether',
        starred: false,
      },
      {
        name: 'Solana',
        unit: 'SOL',
        price: '$56,623.54',
        change: 1.45,
        marketCap: '$880,423,640,582',
        icon: 'icon-sol',
        starred: false,
      },
      {
        name: 'XRP',
        unit: 'XRP',
        price: '$56,623.54',
        change: -2.22,
        marketCap: '$880,423,640,582',
        icon: 'icon-btc',
        starred: false,
      },
      {
        name: 'Cardano',
        unit: 'ADA',
        price: '$56,623.54',
        change: 0.8,
        marketCap: '$880,423,640,582',
        icon: 'icon-ada',
        starred: false,
      },
      {
        name: 'Avalanche',
        unit: 'AVAX',
        price: '$56,623.54',
        change: 1.41,
        marketCap: '$880,423,640,582',
        icon: 'icon-avax',
        starred: false,
      },
    ]

    const hasPath3 = (icon) => {
      return ['icon-eth', 'icon-bnb', 'icon-sol', 'icon-ada', 'icon-avax'].includes(icon)
    }

    const hasPath4 = (icon) => {
      return ['icon-eth', 'icon-bnb', 'icon-sol', 'icon-ada', 'icon-avax'].includes(icon)
    }

    const hasPath5 = (icon) => {
      return ['icon-bnb', 'icon-sol', 'icon-ada', 'icon-avax'].includes(icon)
    }

    const hasPath6 = (icon) => {
      return ['icon-bnb', 'icon-ada'].includes(icon)
    }

    const hasPath7 = (icon) => {
      return ['icon-ada'].includes(icon)
    }

    const hasPath8 = (icon) => {
      return ['icon-ada'].includes(icon)
    }

    const hasPath9 = (icon) => {
      return ['icon-ada'].includes(icon)
    }

    onMounted(() => {
      // Initialize charts - simplified for this example
      // In a real implementation, you would use a chart library like ApexCharts
      coins.forEach((coin, index) => {
        // Mock chart initialization
        console.log(`Initializing chart for ${coin.name} with id total-revenue-chart-${index + 1}`)
      })
    })

    return {
      activeTab,
      tabs,
      coins,
      hasPath3,
      hasPath4,
      hasPath5,
      hasPath6,
      hasPath7,
      hasPath8,
      hasPath9,
    }
  },
}
</script>
