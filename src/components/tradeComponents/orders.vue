<template>
  <div class="ordersView px-3">
    <div>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="Current Orders (0)" name="first">
          <span class="fw-b">Current Orders (0)</span>
        </el-tab-pane>
        <el-tab-pane label="Order History" name="second">
          <span class="fw-b">Order History</span>
        </el-tab-pane>
        <el-tab-pane label="Trade History" name="third">
          <span class="fw-b">Trade History</span>
        </el-tab-pane>
        <el-tab-pane label="Subscription & Redemption History" name="fourth">
          <span class="fw-b">Subscription & Redemption History</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UseOrders',
  data() {
    return {
      activeName: 'first',
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
  },
}
</script>
<style lang="scss">
.ordersView {
  .el-tabs__nav-wrap::after {
    position: static !important;
  }
}
</style>
<style lang="scss" scoped>
.ordersView {
  height: 430px;
  width: 100%;
}
</style>