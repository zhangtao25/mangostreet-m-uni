<template>
  <view class="note-item" @click="goTo(`/note-detail/${noteData.id}`)">
    <image mode="aspectFit" :style="{height:h}" @load="fn" :src="noteData.cover"/>
    <view class="title">{{noteData.title}}</view>
    <view class="ul">
      <view class="li">
        <image class="user-img" :src="noteData.avatar"/>
        <view class="span">{{noteData.nickname}}</view>
      </view>
      <view class="li">
        <view class="i iconfont icon-love"></view>
        <view class="span">{{noteData.collects}}</view>
      </view>
    </view>
  </view>
</template>
<script>
  export default {
    components:{
    },
    props:['noteData'],
    mounted() {
      console.log(this.h,11111)
    },
    data(){
      return{
        w:0,
        h:Math.random() *100 + 500 + 'rpx'
      }
    },
    methods: {
      goTo(path){
        this.$router.push({path})
      },
      fn(e){
        console.log(e)
      }
    },
    computed:{
      // cover(){
      //   let arr = this.noteData.images.split(";");
      //   return arr[0]
      // }
    }
  }
</script>

<style lang="scss">
  .note-item{
    /*width: 50%;*/
    .title{
      padding: 15rpx;
      font-size: 28rpx;
      font-weight: bolder;
      color: #333;
    }
    image{
      width: 100%;
    }
    .user-img{
      width: 50rpx;
      height: 50rpx;
      border-radius: 50%;
    }
    .ul{
      display: flex;
      justify-content: space-between;
      padding: 0 15rpx 15rpx 15rpx;
      font-size: 24rpx;
      color: #5d5d5d;
      .li{
        display: flex;
        justify-content: center;
        align-items: center;
        .span{
          margin-left: 10rpx;
        }
      }
    }
  }
</style>
