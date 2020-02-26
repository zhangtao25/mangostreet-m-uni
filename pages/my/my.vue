<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="false">
<!--		  <block slot="backText">返回</block>-->
		  <block slot="content">我</block>
		</cu-custom>

    <view class="bg-white" style="display: flex">
      <view style="width: 30%;background-color: white">
        <view class="cu-avatar xl round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></view>
      </view>
      <view style="width: 70%;background-color: white;display: flex;justify-content: space-around;align-items: center">
        <view>
          <view>10</view>
          <view>点赞</view>
        </view>

        <view>
          <view>10</view>
          <view>收藏</view>
        </view>

        <view>
          <view>10</view>
          <view>评论</view>
        </view>
      </view>
    </view>

    <button @tap="navigateTo('/pages/setting/setting')" class="cu-btn">设置</button>

    <scroll-view scroll-x class="bg-white nav text-center">
      <view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in testArr" :key="index" @tap="tabSelect" :data-id="index">
        {{item}}
      </view>
    </scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        TabCur: 0,
        testArr:['笔记', '收藏', '赞过']
			}
		},
		methods: {
      NavChange: function (e) {
        this.PageCur = e.currentTarget.dataset.cur
      },
      tabSelect(e) {
        this.TabCur = e.currentTarget.dataset.id;
        this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
      },
      navigateTo(url){
        uni.navigateTo({
          url: url
        });
      }
		}
	}
</script>

<style>

</style>
