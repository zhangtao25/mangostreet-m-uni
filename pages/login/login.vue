<template>
  <view>
    <cu-custom bgColor="bg-gradual-pink" :isBack="true">
      <block slot="backText">返回</block>
      <block slot="content">登录</block>
    </cu-custom>
    <form>
      <view class="cu-form-group margin-top">
        <view class="title">手机号</view>
        <input v-model="loginForm.userPhone" placeholder="" name="input"></input>
      </view>
      <view class="cu-form-group">
        <view class="title">密码</view>
        <input v-model="loginForm.userPassword" placeholder="" name="input"></input>
      </view>

    </form>
    <view class="padding flex flex-direction">
<!--      <button class="cu-btn bg-grey lg">登录</button>-->
      <button class="cu-btn bg-red margin-tb-sm lg" @click="Login">登录</button>
    </view>
    <view>{{token}}</view>
  </view>
</template>

<script>
  import UserService from './../../src/api/user'
  export default {
    data() {
      return {
        loginForm:{
          userPhone:'',
          userPassword:''
        },
        token:""
      };
    },
    methods: {
      Login(){
        let parameter = {
          userPhone: this.loginForm.userPhone,
          userPassword: this.loginForm.userPassword
        }
        UserService.Login(parameter).then(res=>{
          console.log(res)
          this.token = res.data.data.userToken
        })
      },
      PickerChange(e) {
        this.index = e.detail.value
      },
      MultiChange(e) {
        this.multiIndex = e.detail.value
      },
      MultiColumnChange(e) {
        let data = {
          multiArray: this.multiArray,
          multiIndex: this.multiIndex
        };
        data.multiIndex[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
          case 0:
            switch (data.multiIndex[0]) {
              case 0:
                data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
            }
            data.multiIndex[1] = 0;
            data.multiIndex[2] = 0;
            break;
          case 1:
            switch (data.multiIndex[0]) {
              case 0:
                switch (data.multiIndex[1]) {
                  case 0:
                    data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                    break;
                  case 1:
                    data.multiArray[2] = ['蛔虫'];
                    break;
                  case 2:
                    data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                    break;
                  case 3:
                    data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                    break;
                  case 4:
                    data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                    break;
                }
                break;
              case 1:
                switch (data.multiIndex[1]) {
                  case 0:
                    data.multiArray[2] = ['鲫鱼', '带鱼'];
                    break;
                  case 1:
                    data.multiArray[2] = ['青蛙', '娃娃鱼'];
                    break;
                  case 2:
                    data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                    break;
                }
                break;
            }
            data.multiIndex[2] = 0;
            break;
        }
        this.multiArray = data.multiArray;
        this.multiIndex = data.multiIndex;
      },
      TimeChange(e) {
        this.time = e.detail.value
      },
      DateChange(e) {
        this.date = e.detail.value
      },
      RegionChange(e) {
        this.region = e.detail.value
      },
      SwitchA(e) {
        this.switchA = e.detail.value
      },
      SwitchB(e) {
        this.switchB = e.detail.value
      },
      SwitchC(e) {
        this.switchC = e.detail.value
      },
      SwitchD(e) {
        this.switchD = e.detail.value
      },
      RadioChange(e) {
        this.radio = e.detail.value
      },
      CheckboxChange(e) {
        var items = this.checkbox,
          values = e.detail.value;
        for (var i = 0, lenI = items.length; i < lenI; ++i) {
          items[i].checked = false;
          for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
            if (items[i].value == values[j]) {
              items[i].checked = true;
              break
            }
          }
        }
      },
      ChooseImage() {
        uni.chooseImage({
          count: 4, //默认9
          sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album'], //从相册选择
          success: (res) => {
            if (this.imgList.length != 0) {
              this.imgList = this.imgList.concat(res.tempFilePaths)
            } else {
              this.imgList = res.tempFilePaths
            }
          }
        });
      },
      ViewImage(e) {
        uni.previewImage({
          urls: this.imgList,
          current: e.currentTarget.dataset.url
        });
      },
      DelImg(e) {
        uni.showModal({
          title: '召唤师',
          content: '确定要删除这段回忆吗？',
          cancelText: '再看看',
          confirmText: '再见',
          success: res => {
            if (res.confirm) {
              this.imgList.splice(e.currentTarget.dataset.index, 1)
            }
          }
        })
      },
      textareaAInput(e) {
        this.textareaAValue = e.detail.value
      },
      textareaBInput(e) {
        this.textareaBValue = e.detail.value
      }
    }
  }
</script>

<style>
  .cu-form-group .title {
    min-width: calc(4em + 15px);
  }
</style>
