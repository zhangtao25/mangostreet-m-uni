<template>
  <view class="header-nav" :style="[{'height':CustomBar + 'px'}]">
    <view class="status-bar" :style="[{'height':StatusBar + 'px'}]"></view>

    <view class="wrap" :style="[{'height':(CustomBar-StatusBar) + 'px'}]">
      <view>x</view>
      <text style="font-weight: bolder;font-size: 32rpx">{{title}}</text>
      <view></view>
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
    },
    props:['title']
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
      justify-content: space-between;
      border-bottom: 0.5px solid #e6e6e6;
    }
  }
</style>
