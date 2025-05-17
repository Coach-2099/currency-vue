<template>
  <div class="topView d-flex justify-content-start align-items-center">
    <div class="btnImg d-flex justify-content-start align-items-center">
      <image src="/static/images/checkBit.png" mode="scaleToFill" />
      <div>B</div>
    </div>
    <div class="ps-xl-2 pe-xl-3">
      <div>BTC/USDT</div>
      <div class="d-flex">
        <div>Bitcoin</div>
        <div class="ms-xl-2 me-xl-2">|</div>
        <div>BTC Network</div>
      </div>
    </div>
    <div class="ps-3">
      <div>102,953.2</div>
      <div>≈102,973.70 USD</div>
    </div>
    <div class="ps-3">
      <div>24H Change</div>
      <div>-741.4</div>
    </div>
    <div class="ps-3">
      <div>24H High</div>
      <div>-104,568.2</div>
    </div>
    <div class="ps-3">
      <div>24H Low</div>
      <div>102,595.6</div>
    </div>
    <div class="ps-3">
      <div>24H Volume(BTC)</div>
      <div>7,272.79</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopView',
}
</script>
<style lang="scss" scoped>
.topView {
  .btnImg {
    padding-left: 16px;
    image {
      width: 18px;
      height: 18px;
    }
  }
}
</style>