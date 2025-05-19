<template>
  <div class="orderBookListView px-2 py-2">
    <div class="fw-bold text-black fs-14">Order Book</div>
    <div class="d-flex justify-content-between align-items-sm-center">
      <div class="d-flex justify-content-sm-start">
        <div class="ms-2 me-2">框1</div>
        <div class="ms-2 me-2">框2</div>
        <div class="ms-2 me-2">框3</div>
      </div>
      <div>
        <select class="form-select form-select-sm" aria-label="Default select example">
          <option selected>0.1</option>
          <option value="1">1</option>
          <option value="2">10</option>
          <option value="3">100</option>
        </select>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-sm-center mt-2 px-2 text-muted">
      <div class="fs-14">Price(USDT)</div>
      <div class="d-flex justify-content-between w-50">
        <div class="fs-14">Qty(BTC)</div>
        <div class="fs-14">Total(BTC)</div>
      </div>
    </div>
    <div
      v-for="index in 8"
      :key="index"
      class="d-flex justify-content-between align-items-center mt-1 mb-1 px-2"
    >
      <div class="fs-14 text-danger">103818.1</div>
      <div class="d-flex justify-content-between w-50 text-black">
        <div class="fs-14 text-start">0.00333</div>
        <div class="fs-14 text-end">19.098</div>
      </div>
    </div>
    <div class="d-flex px-2">
      <div class="fs-16 text-success">103,867.10</div>
      <div class="fs-14">≈103,867.10 USD</div>
    </div>
    <div
      v-for="index in 8"
      :key="index"
      class="d-flex justify-content-between align-items-center mt-1 mb-1 px-2"
    >
      <div class="fs-14 text-success">103818.1</div>
      <div class="d-flex justify-content-between w-50 text-black">
        <div class="fs-14 text-start">0.00333</div>
        <div class="fs-14 text-end">19.098</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OrderBook',
}
</script>
<style scoped>
.orderBookListView {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  /* background-color: #000000; */
}
</style>