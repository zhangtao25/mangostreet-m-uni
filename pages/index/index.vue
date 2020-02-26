<template>
  <container>
    <home></home>
    <mall></mall>
    <msg></msg>
    <my></my>
    <bottom-nav/>
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
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

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
