<template>
	<view>
    <cu-custom bgColor="bg-white" :isBack="true">
<!--      <block slot="backText">返回</block>-->
      <block slot="content">设置</block>
    </cu-custom>
    <form>
      <view class="cu-form-group">
        <view class="title">时间选择</view>
        <picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
          <view class="picker">
            {{time}}
          </view>
        </picker>
      </view>
    </form>

<!--    <button class="cu-btn">退出</button>-->
    <button class="cu-btn bg-red margin-tb-sm lg">退出</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			  time:'12:01'
			}
		},
		methods: {
      TimeChange(){

      }
		}
	}
</script>

<style>

</style>
