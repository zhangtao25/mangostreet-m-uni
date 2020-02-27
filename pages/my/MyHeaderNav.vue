<template>
  <view class="header-nav" :style="[{'height':CustomBar + 'px'}]">
    <view class="status-bar" :style="[{'height':StatusBar + 'px'}]"></view>
    <view class="wrap" :style="[{'height':(CustomBar-StatusBar) + 'px'}]">
      <view>x</view>
      <view class="m">
        <text>张涛</text>
        <text>小红书号：905019230</text>
      </view>
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
      .m{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text:nth-child(1){
          font-size: 28rpx;
          font-weight: bolder;
        }
        text:nth-child(2){
          font-size: 20rpx;
          color: #999;
        }
      }
    }
  }
</style>
