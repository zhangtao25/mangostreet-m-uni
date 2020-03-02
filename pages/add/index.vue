<template>
  <container>
    <view class="status-bar" :style="[{'height':StatusBar + 'px'}]"></view>
    <view class="row">
      <view class="cancel">
        取消
      </view>
      <view class="publish">
        发表
      </view>
    </view>

    <view class="row upload">
      <view>{{msg}}</view>

      <view class="upload-item bg-img" v-for="(item, index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">

        <image :src="imgList[index]" mode="aspectFill"></image>

        <view class="cu-tag bg-red" @tap.stop="DelImage" :data-index="index">
          <text class="cuIcon-close"></text>
        </view>

      </view>

      <view class="upload-item solids" @tap="ChooseImage">
        <text class="cuIcon-cameraadd">1</text>
      </view>

    </view>

    <button @tap="Upload">上传</button>
  </container>
</template>
<script>
  export default {
    data(){
      return{
        StatusBar:this.StatusBar,
        imgList:[],
        msg:''
      }
    },
    methods:{
      ViewImage(){

      },
      DelImage(){

      },
      ChooseImage(){
        uni.chooseImage({
          count: 4, //默认9
          sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album'], //从相册选择
          success: res => {
            console.log(res)
            this.imgList = res.tempFilePaths
          }
        });
      },
      Upload(){
        let _this = this
        uni.uploadFile({
          url: 'http://192.168.1.6:8001/upload', //仅为示例，非真实的接口地址
          filePath: _this.imgList[0],
          name: 'file',
          // formData: {
          //   'user': 'test'
          // },
          success: (uploadFileRes) => {
            _this.msg = JSON.stringify(uploadFileRes)
            // console.log(uploadFileRes.data);
          },
          fail: (err) =>{
            _this.msg = JSON.stringify(err)
            console.log(err)
          }
        });
      }
    }
  }
</script>

<style lang="scss">
  .upload{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .upload-item{
      width: 25vw;
      height: 25vw;
      border: 1px solid #000000;
    }
    .bg-img.upload-item{
      image{
        width: 100%;
        height: 100%;
      }
    }
  }

</style>
