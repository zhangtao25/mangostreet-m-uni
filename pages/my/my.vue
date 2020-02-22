<template>
	<view>
		我是我
    <navigator url="/pages/login/login" class="nav-li" navigateTo>
      sss
    </navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
      NavChange: function (e) {
        this.PageCur = e.currentTarget.dataset.cur
      }
		}
	}
</script>

<style>

</style>
