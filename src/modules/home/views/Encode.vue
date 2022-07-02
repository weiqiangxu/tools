<template>
    <div class="urlencode-main">
        <div class="t-demo-tabs">
            <t-tabs v-model="value">
                <t-tab-panel value="urldecode" label="Url编码/解码">
                    <Urlencode></Urlencode>
                </t-tab-panel>
                <t-tab-panel value="Unix" label="Unix时间戳">
                    <Timestamp></Timestamp>
                </t-tab-panel>
                <t-tab-panel value="utf8" label="Utf8编码/解码">
                    <!-- <p style="padding: 25px;">敬请期待</p> -->
                    <UTF8></UTF8>
                </t-tab-panel>
                <t-tab-panel value="Unicode" label="Unicode编码/解码">
                    <UnitCode></UnitCode>
                </t-tab-panel>
                <t-tab-panel value="Html" label="Html编码/解码">
                    <Html></Html>
                </t-tab-panel>
              <t-tab-panel value="base64" label="base64编码/解码">
                <base64></base64>
              </t-tab-panel>
              <t-tab-panel value="Hex" label="字符串分解">
                    <String></String>
               </t-tab-panel>
            </t-tabs>
        </div>
    </div>
</template>

<script>
import Urlencode from './encode/urlencode'
import UTF8 from './encode/utf8'
import UnitCode from './encode/unicode'
import Timestamp from './encode/timestamp'
import Html from './encode/html'
import String from './encode/string'
import base64 from './encode/base64'
export default {
    components: {
        Urlencode,
        Timestamp,
        UTF8,
        UnitCode,
        Html,
        String,
      base64
    },
    data() {
        return {
            value: 'urldecode',
        };
    },
    watch: {
    },
    mounted() {
    },
    methods: {
    },
}
</script>

<style type="text/css" scoped>
    .urlencode-main {
        align-items: flex-start !important;
        display: block !important;
    }
</style>

<style lang="less">
.t-textarea__inner {
    min-height: 550px !important;
}
</style>

