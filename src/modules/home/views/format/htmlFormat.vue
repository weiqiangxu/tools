<template>
    <div style="padding: 20px">
        <t-textarea class="mb10" autofocus v-model="content" placeholder="请输入要格式化的html/js"></t-textarea>
        <div style="text-align: right;">
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="htmlFormat">格式化</t-button>
        </div>
    </div>
</template>

<script>
import pretty from 'pretty';
export default {
    name: "htmlFormat",
    data() {
        return {
            content: "<html><head></head><body><div>hello world</div></body></html>",
        }
    },
    methods: {
        htmlFormat(){
            this.content = pretty(this.content , {ocd: true});
        }
    }
}
</script>

<style  lang="less">
.t-textarea__inner {
    min-height: 550px !important;
}
</style>