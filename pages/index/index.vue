<template>
  <container>
    <home :style="{'display':pageCur===0?'block':'none'}"></home>
    <mall :style="{'display':pageCur===1?'block':'none'}"></mall>
    <msg :style="{'display':pageCur===3?'block':'none'}"></msg>
    <my :style="{'display':pageCur===4?'block':'none'}"></my>
    <bottom-nav @navTo="navTo"/>
  </container>
</template>

<script>
  import BottomNav from './BottomNav'

  import home from './../home'
  import mall from './../mall'
  import msg from './../msg'
  import my from './../my'
	export default {
    components:{
      BottomNav,
      home,
      mall,
      msg,
      my
    },
		data() {
			return {
				title: 'Hello',
        pageCur: 0
			}
		},
    onLoad: function (options) {
      setTimeout(function () {
        console.log('start pulldown');
      }, 1000);
      uni.startPullDownRefresh();
    },
    onPullDownRefresh() {
      console.log('refresh');
      setTimeout(function () {
        uni.stopPullDownRefresh();
      }, 1000);
    },
    mounted(){
      console.log(this.CustomBar)
    },
		methods: {
      navTo(index){
        this.pageCur = index
        console.log(this.pageCur)
      }
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
