<template>
  <view class="header-nav" :style="[{'height':CustomBar + 'px'}]">
    <view class="status-bar" :style="[{'height':StatusBar + 'px'}]"></view>
    <view class="wrap" :style="[{'height':(CustomBar-StatusBar) + 'px'}]">
      我的
    </view>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        StatusBar: this.StatusBar,
        CustomBar: this.CustomBar,
      };
    }
  }
</script>
<style lang="scss">
  .header-nav {
    position: fixed;
    width: 100%;
    .wrap {
      background-color: white;
      /*line-height: 100%;*/
      /*text-align: center;*/
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 0.5px solid #e6e6e6;
    }
  }
</style>
