<template>
    <view>
        <test v-if="PageCur=='test'"></test>
        <basics v-if="PageCur=='basics'"></basics>
        <components v-if="PageCur=='component'"></components>
        <plugin v-if="PageCur=='plugin'"></plugin>
        <view class="cu-bar tabbar bg-white shadow foot">

            <!--            test-->
            <view class="action" @click="NavChange" data-cur="test">
                <view class='cuIcon-cu-image'>
                    <image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
                </view>
                <view :class="PageCur=='basics'?'text-green':'text-gray'">测试</view>
            </view>

            <view class="action" @click="NavChange" data-cur="basics">
                <view class='cuIcon-cu-image'>
                    <image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
                </view>
                <view :class="PageCur=='basics'?'text-green':'text-gray'">元素</view>
            </view>
            <view class="action" @click="NavChange" data-cur="component">
                <view class='cuIcon-cu-image'>
                    <image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
                </view>
                <view :class="PageCur=='component'?'text-green':'text-gray'">组件</view>
            </view>
            <view class="action" @click="NavChange" data-cur="plugin">
                <view class='cuIcon-cu-image'>
                    <image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
                </view>
                <view :class="PageCur=='plugin'?'text-green':'text-gray'">扩展</view>
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
