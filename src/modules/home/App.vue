<!-- 页面结构入口 -->
<template>
    <router-view></router-view>
</template>

<script>
import "./App.less";
import "./frame.less"
export default {
    data: function () {
        return {
        }
    },
    watch: {
        '$route': function(newRoute){ //监听路由变化
            console.log('App 监听路由变化: ', newRoute)
        }
    },
    mounted: function () {
        // add pageview log
    },
    methods: {
    },
}

</script>