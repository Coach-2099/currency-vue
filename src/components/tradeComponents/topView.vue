<template>
  <div class="topView d-flex justify-content-start align-items-center">
    <div class="btnImg d-flex justify-content-start align-items-center">
      <img src="@/assets/images/icon/checkBit.png" mode="scaleToFill" />
      <div>B</div>
    </div>
    <div class="ps-xl-2 pe-xl-3">
      <div class="fs-16 fw-bold">BTC/USDT</div>
      <div class="d-flex">
        <div class="text-decoration-line-blink">Bitcoin</div>
        <div class="ms-xl-2 me-xl-2">|</div>
        <div class="text-decoration-line-blink">BTC Network</div>
      </div>
    </div>
    <div class="ps-3 priceNum">
      <div class="fs-16 currentPrice1">102,953.2</div>
      <div class="fs-14 currentPrice2">≈102,973.70 USD</div>
    </div>
    <div class="ps-3 fs-12">
      <div>24H Change</div>
      <div>-741.4</div>
    </div>
    <div class="ps-3 fs-12">
      <div>24H High</div>
      <div>-104,568.2</div>
    </div>
    <div class="ps-3 fs-12">
      <div>24H Low</div>
      <div>102,595.6</div>
    </div>
    <div class="ps-3 fs-12">
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
  border-radius: 10px;
  .btnImg {
    padding-left: 16px;
    img {
      width: 18px;
      height: 18px;
    }
  }
  .priceNum {
    .currentPrice1 {
      font-weight: 700;
    }
    .currentPrice2 {
      font-weight: 500;
    }
  }
  .text-decoration-line-blink {
    border-bottom: 1px dashed #000;
    padding-bottom: 1px;
  }
}
</style>