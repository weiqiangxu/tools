<template>
    <div style="padding: 20px">
        <t-textarea class="mb10" autofocus v-model="content" placeholder="请输入需编码的文本"></t-textarea>

        <div style="text-align: right;">
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="urlencode">UrlEncode</t-button>
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="urldecode">UrlDecode</t-button>
            <t-button style="margin-left: 20px" theme="primary" variant="outline" @click="copy">复制到剪切板</t-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: '',
        }
    },
    mounted() {

    },
    methods: {
        urldecode() {
            this.content = decodeURIComponent(this.content.replaceAll('+', '%20'));
        },
        urlencode() {
            this.content = encodeURIComponent(this.content);
        },
        clear() {
            this.content = '';
        },
        copy() {
            this.$copyText(this.content).then(() => {
                this.$message.success('复制成功');
            });
        }
    }
}
</script>


