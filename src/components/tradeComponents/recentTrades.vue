<template>
  <div class="recentTradesView px-2 py-2">
    <div class="fw-bold text-black fs-14">Recent Trades</div>
    <div class="d-flex justify-content-between align-items-sm-center mt-2 px-2 text-muted">
      <div class="fs-14">Price(USDT)</div>
      <div class="d-flex justify-content-between w-50">
        <div class="fs-14">Qty(BTC)</div>
        <div class="fs-14">Total(BTC)</div>
      </div>
    </div>
    <div
      v-for="index in 18"
      :key="index"
      class="d-flex justify-content-between align-items-center mt-2 mb-1 px-2"
    >
      <div class="fs-14 base-text-red">103818.1</div>
      <div class="d-flex justify-content-between w-50 text-black">
        <div class="fs-14 text-start">0.00333</div>
        <div class="fs-14 text-end">19.098</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecentTrades',
}
</script>
<style lang="scss" scoped>
.recentTradesView {
}
</style>