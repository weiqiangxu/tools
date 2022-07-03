<template>
    <t-row justify="space-between">
        <t-col class="json-left" :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
            <t-textarea class="src-textarea" v-model="srcVal" placeholder="请输入待解析的json内容" 
            autofocus @change="handleSrcChange"></t-textarea>
        </t-col>
        <t-col class="json-right" :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <span v-if="error" style="color: #f01" v-html="error"></span>
            <t-row style="height:90vh; overflow: auto;background-color: rgb(255, 255, 255);"  v-else>
                <jsonView style="height:100%" :data="targetVal" :deep="5"></jsonView>
            </t-row>
                <t-row style="text-align: right;margin-top: 15px">
                <t-button style="margin-left: 20px" theme="primary" variant="outline" @click="copy">复制到剪切板</t-button>
            </t-row>
        </t-col>
    </t-row>
</template>

<script>
import Vue from 'vue'
import jsonView from 'vue-json-views'
export default {
    components: {
        jsonView,
    },
    data() {
        return {
            containerH: '100vh',
            srcVal: '',
            targetVal: {},
            error: '',
        };
    },
    watch: {
    },
    mounted() {
        Vue.config.errorHandler = err => {
            console.log('Exception: ', err)
            this.targetVal = '';
        }
    },
    methods: {
        copy() {
            this.$copyText(JSON.stringify(this.targetVal)).then(() => {
                this.$message.success('复制成功');
            });
        },
        handleSrcChange(val) {
            this.error = '';
            this.targetVal = '';
            if (!val) {
                return;
            }
            console.log(val);
            try {
                let targetVal = JSON.parse(val);
                console.log(typeof targetVal);
                if (typeof targetVal != 'object' && typeof targetVal != 'Object') {
                    this.error = '非正确json串';
                    return;
                }
                this.targetVal = targetVal;
            } catch (e) {
                console.log(e);
                this.error = this.getErrInfo(e);
            }
        },
        getErrInfo(e) {
            e = e.toString();
            // 区分几种情况

            // Unexpected token h in JSON at position 5
            let err = e.split(' ')
            let errPos = parseInt(err[err.length - 1]);
            console.log("errPos", errPos);
            e = e
                + "<div style='background-color:#f3f5f7;padding: 4px 4px;margin: 4px;border-radius: 4px;color:#37474f;'>"
                + this.srcVal.substr(errPos - 10, 11)
                + "</div>"
                + "这里导致解析失败了";

            // SyntaxError: Unexpected end of JSON input

            return e;
        }
    },
}
</script>

<style lang="less">
    .t-textarea__inner {
        height: 100%;
    }
    .json-area {
        height: 90vh;
        width: 100%;
        text-align: center;
        overflow: auto;
    }
    .json-left {
        height: 90vh;
        border: 1px solid #E3E5EA;
        padding: 0px;
    }
    .json-right {
        padding: 2px;
        text-align: left;
        height: 90vh;
        border: 1px solid #E3E5EA;
    }
    .src-textarea {
        font-size: 16px;
        width: 100%;
        height:90vh;
        border-radius:0;
        resize: none;
        outline:none;
        border: 1px solid #eee;
        /*overflow: auto;*/
    }
    .icon-area {
        text-align: right;
    }
    .icon-area-icon {
        font-size: 22px;
        cursor: pointer;
    }
    .icon-area-icon:hover {
        background: #E3E5EA;
    }
</style>