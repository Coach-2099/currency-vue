<template>
  <div :class="isDarkMode ? 'is_dark' : ''">
    <BaseHeader @toggle-theme="toggleTheme" :isDarkMode="isDarkMode" />

    <div class="content d-grid">
      <div class="dataView">
        <div class="contentWidth">
          <topView />
        </div>
        <div class="chartAndlist d-grid">
          <div class="chartView">
            <!-- <LightweightChart
              ref="chartRef"
              v-model:data="candleData"
              :ema-configs="emaConfigs"
              :theme="theme"
              :initial-interval="currentInterval"
              @interval-change="handleIntervalChange"
              :hasMore="hasMore"
              @load-more-data="handleLoadMore"
            ></LightweightChart> -->
          </div>
          <div class="orderBook">
            <orderBook />
          </div>
          <div class="recentTrades">
            <recentTrades />
          </div>
        </div>
        <div class="orderListView">
          <orders />
        </div>
      </div>
      <div class="tradeView">右侧</div>
    </div>
    <!-- <SaleSection /> -->
    <!-- <BaseFooter /> -->
  </div>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue'
// import SaleSection from '@/components/SaleSection.vue'
// import BaseFooter from '@/components/BaseFooter.vue'
import topView from '@/components/tradeComponents/topView.vue'
import orderBook from '@/components/tradeComponents/orderBook.vue'
import recentTrades from '@/components/tradeComponents/recentTrades.vue'
import orders from '@/components/tradeComponents/orders.vue'
import LightweightChart from '@/components/LightweightChart/index.vue'
export default {
  name: 'UserTrade',
  components: {
    BaseHeader,
    topView,
    orderBook,
    recentTrades,
    orders,
    // SaleSection,
    // BaseFooter,
    LightweightChart,
  },
  data() {
    return {
      isDarkMode: false, // 暗黑模式
    }
  },
  created() {
    this.$nextTick(() => {
      console.log('this.$refs.chartRef', this.$refs.chartRef)
      this.$refs.chartRef.appendNewCandle([
        {
          time: new Date().getTime(),
          open: 100,
          high: 100,
          low: 100,
          close: 100,
          volume: 66, // 成交量
        },
      ])
    })
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
    },
  },
}
</script>
<style>
@import '@/assets/scss/app.scss';
</style>
<style lang="scss" scoped>
.content {
  grid-template-columns: 5fr 1fr;
  grid-gap: 4px;
  height: calc(100vh - 50px);
  background: var(--line);
  .dataView {
    min-height: 600px;
    .contentWidth {
      width: 100%;
      // line-height: 56px;
      background: var(--bg1);
      padding-bottom: 5px;
    }
    .chartAndlist {
      grid-template-columns: 5fr 1.5fr 1.5fr;
      grid-gap: 4px;
      margin-top: 3px;
      .chartView,
      .orderBook,
      .recentTrades {
        background: var(--bg1);
      }
      .chartView {
        min-height: 580px;
      }
    }
    .orderListView {
      margin-top: 5px;
      background: var(--bg1);
    }
  }
  .tradeView {
    background: var(--bg1);
    height: 100%;
  }
}
</style>