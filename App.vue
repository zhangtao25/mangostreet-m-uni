<script>
  import Vue from 'vue'
	export default {
		onLaunch: function() {
			console.log('App Launch')

      uni.getSystemInfo({
        success: function(e) {

          console.log(e.model);
          console.log(e.pixelRatio);
          console.log(e.windowWidth);
          console.log(e.windowHeight);
          console.log(e.language);
          console.log(e.version);
          console.log(e.platform);

          Vue.prototype.windowWidth = e.windowWidth


          // #ifndef MP
          Vue.prototype.StatusBar = e.statusBarHeight;
          if (e.platform == 'android') {
            Vue.prototype.CustomBar = e.statusBarHeight + 50;
          } else {
            Vue.prototype.CustomBar = e.statusBarHeight + 45;
          };
          // #endif

          // #ifdef MP-WEIXIN
          Vue.prototype.StatusBar = e.statusBarHeight;
          let custom = wx.getMenuButtonBoundingClientRect();
          Vue.prototype.Custom = custom;
          Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
          // #endif

          // #ifdef MP-ALIPAY
          Vue.prototype.StatusBar = e.statusBarHeight;
          Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
          // #endif
        }
      })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
  /* #ifndef APP-PLUS-NVUE */
  /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
  @import './src/assets/css/uni.css';
	/*每个页面公共css */
  view{
    color: #333;
  }
  view{
    font-size: 28rpx;
  }
</style>
