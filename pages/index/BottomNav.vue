<template>
  <view class="bottom-nav">
    <view class="list">
      <view class="item">事件</view>
      <view class="item">信息</view>
      <view>
        <image style="width: 50rpx;height: 50rpx" src="/static/logo.png"></image>
      </view>
      <view class="item">消息</view>
      <view class="item">我的</view>
    </view>
  </view>
</template>

<script>

</script>
<style lang="scss">
  .bottom-nav{
    .list{
      width: 100%;
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item{
        font-size: 40rpx;
      }
    }
  }
</style>
