<template>
    <view>
        <test v-if="PageCur=='test'"></test>
        <basics v-if="PageCur=='basics'"></basics>
        <components v-if="PageCur=='component'"></components>
        <plugin v-if="PageCur=='plugin'"></plugin>

        <my v-if="PageCur=='my'"></my>



        <view class="cu-bar tabbar bg-white shadow foot">

            <!--            test-->
            <view class="action" @click="NavChange" data-cur="test">
                <view class='cuIcon-cu-image'>
                    <image :src="'/static/tabbar/plugin' + [PageCur=='test'?'_cur':''] + '.png'"></image>
                </view>
                <view :class="PageCur=='test'?'text-green':'text-gray'">首页</view>
            </view>

            <view class="action" @click="NavChange" data-cur="basics">
                <view class='cuIcon-cu-image'>
                    <image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
                </view>
                <view :class="PageCur=='basics'?'text-green':'text-gray'">商城</view>
            </view>
            <view class="action" @click="NavChange" data-cur="component">
                <view class='cuIcon-cu-image'>
                    <image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
                </view>
                <view :class="PageCur=='component'?'text-green':'text-gray'">消息</view>
            </view>
            <view class="action" @click="NavChange" data-cur="my">
                <view class='cuIcon-cu-image'>
                    <image :src="'/static/tabbar/about' + [PageCur == 'my'?'_cur':''] + '.png'"></image>
                </view>
                <view :class="PageCur=='my'?'text-green':'text-gray'">我的</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                PageCur: 'test'
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
