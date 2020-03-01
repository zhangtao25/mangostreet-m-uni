<template>
  <view>
    <header-nav :title="'首页'"/>
    <s-pull-scroll ref="pullScroll" :pullDown="pullDown" :pullUp="loadData" :top="750/windowWidth * CustomBar">
      <view class="note-wrap">
        <note-item v-for="(item,index) of noteData" :key="index" :noteData="item"/>
      </view>

    </s-pull-scroll>
  </view>
</template>

<script>
  import HeaderNav from './../../src/components/HeaderNav'
  import sPullScroll from './../../src/components/test'
  import NoteItem from "./NoteItem";
  export default {
    components:{
      HeaderNav,
      sPullScroll,
      NoteItem
    },
    data(){
      return{
        list: [],
        // CustomBar:this.CustomBar,
        StatusBar: this.StatusBar,
        CustomBar: this.CustomBar,
        windowWidth: this.windowWidth,
        noteData:[
          {
            id:111,
            cover:"https://ci.xiaohongshu.com/58ddbcf6-3afa-374a-a9cf-da6ece9b126d",
            title:"圆了仙女梦|复古又少女感的室外写真",
            avatar:"http://localhost:8001/user/111.jpg",
            nickname:"丽娜听",
            collects:"100"
          },
          {
            id:111,
            cover:"https://ci.xiaohongshu.com/4d481d79-44a7-3873-bd18-7360cd0d70dd",
            title:"圆了仙女梦|复古又少女感的室外写真",
            avatar:"http://localhost:8001/user/111.jpg",
            nickname:"丽娜听",
            collects:"100"
          },
          {
            id:111,
            cover:"https://ci.xiaohongshu.com/18f706ae-311e-329f-aabc-98646bf13d8b",
            title:"圆了仙女梦|复古又少女感的室外写真",
            avatar:"http://localhost:8001/user/111.jpg",
            nickname:"丽娜听",
            collects:"100"
          },
          {
            id:111,
            cover:"https://ci.xiaohongshu.com/58ddbcf6-3afa-374a-a9cf-da6ece9b126d",
            title:"圆了仙女梦|复古又少女感的室外写真",
            avatar:"http://localhost:8001/user/111.jpg",
            nickname:"丽娜听",
            collects:"100"
          },
          {
            id:111,
            cover:"https://ci.xiaohongshu.com/4d481d79-44a7-3873-bd18-7360cd0d70dd",
            title:"圆了仙女梦|复古又少女感的室外写真",
            avatar:"http://localhost:8001/user/111.jpg",
            nickname:"丽娜听",
            collects:"100"
          },
          {
            id:111,
            cover:"https://ci.xiaohongshu.com/18f706ae-311e-329f-aabc-98646bf13d8b",
            title:"圆了仙女梦|复古又少女感的室外写真",
            avatar:"http://localhost:8001/user/111.jpg",
            nickname:"丽娜听",
            collects:"100"
          },
          {
            id:111,
            cover:"https://ci.xiaohongshu.com/58ddbcf6-3afa-374a-a9cf-da6ece9b126d",
            title:"圆了仙女梦|复古又少女感的室外写真",
            avatar:"http://localhost:8001/user/111.jpg",
            nickname:"丽娜听",
            collects:"100"
          },
          {
            id:111,
            cover:"https://ci.xiaohongshu.com/4d481d79-44a7-3873-bd18-7360cd0d70dd",
            title:"圆了仙女梦|复古又少女感的室外写真",
            avatar:"http://localhost:8001/user/111.jpg",
            nickname:"丽娜听",
            collects:"100"
          },
          {
            id:111,
            cover:"https://ci.xiaohongshu.com/18f706ae-311e-329f-aabc-98646bf13d8b",
            title:"圆了仙女梦|复古又少女感的室外写真",
            avatar:"http://localhost:8001/user/111.jpg",
            nickname:"丽娜听",
            collects:"100"
          },
          {
            id:111,
            cover:"https://ci.xiaohongshu.com/58ddbcf6-3afa-374a-a9cf-da6ece9b126d",
            title:"圆了仙女梦|复古又少女感的室外写真",
            avatar:"http://localhost:8001/user/111.jpg",
            nickname:"丽娜听",
            collects:"100"
          },
          {
            id:111,
            cover:"https://ci.xiaohongshu.com/4d481d79-44a7-3873-bd18-7360cd0d70dd",
            title:"圆了仙女梦|复古又少女感的室外写真",
            avatar:"http://localhost:8001/user/111.jpg",
            nickname:"丽娜听",
            collects:"100"
          },
          {
            id:111,
            cover:"https://ci.xiaohongshu.com/18f706ae-311e-329f-aabc-98646bf13d8b",
            title:"圆了仙女梦|复古又少女感的室外写真",
            avatar:"http://localhost:8001/user/111.jpg",
            nickname:"丽娜听",
            collects:"100"
          }
        ]
      }
    },
    methods: {
      refresh () {
        this.$nextTick(() => {
          this.$refs.pullScroll.refresh();
        });
      },
      pullDown (pullScroll) {
        setTimeout(() => {
          this.loadData(pullScroll);
        }, 200);
      },
      loadData (pullScroll) {
        setTimeout(() => {
          if (pullScroll.page == 1) {
            this.list = [];
          }
          const curList = [];
          for (let i = this.list.length; i < this.list.length + 20; i++) {
            curList.push(i);
          }
          this.list = this.list.concat(curList);
          if (this.list.length > 60) {
            // finish(boolean:是否显示finishText,默认显示)
            pullScroll.finish(this.list.length > 5);
          } else {
            pullScroll.success();
          }
        }, 500);
      }
    },
    onLoad () {
      this.refresh();
    }
  }
</script>
<style lang="scss">
  .note-wrap{
    column-count:2;
    column-gap: 20rpx;
    padding: 0 20rpx;
    .note-item{
      margin-bottom: 20rpx;
    }
  }
</style>
