<template>
  <view class="bottom-nav">
    <view class="list">
      <view v-for="(item,index) of navs" @click="onClickBottomNav(index)" class="item" :key="index">
        <text :class="{'actived':index === actived}" v-if="index!==2">{{item.name}}</text>
        <image v-if="index ===2" style="width: 69rpx;height: 51rpx" src="/static/add.png"></image>
      </view>
    </view>
  </view>
</template>

<!--137 102-->

<script>
  export default {
    data(){
      return{
        actived:0,
        navs:[
          {
            name:'事件'
          },
          {
            name:'信息'
          },
          {
            name:'事件'
          },
          {
            name:'消息'
          },
          {
            name:'我的'
          },
        ]
      }
    },
    methods:{
      onClickBottomNav(index){
        this.actived = index
        this.$emit("navTo",index)
      }
    }
  }

</script>
<style lang="scss">
  .bottom-nav{
    .list{
      width: 100%;
      line-height: 100rpx;
      /*height: 100%;*/
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: env(safe-area-inset-bottom);
      background-color: #f9f9f9;
      border-top: 0.5px solid #e6e6e6;
      .item{
        font-size: 32rpx;
        width: 18%;
        /*height: 100%;*/
        /*border: 1px solid salmon;*/
        /*text-align: center;*/
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bolder;
        color: #999;
      }

      .actived{
        transform: scale(1.1);
        transition: 0.2s;
        color: #333;
      }
    }
  }
</style>
