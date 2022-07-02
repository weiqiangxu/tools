<template>
    <div style="padding: 20px">
        <t-textarea class="mb10" autofocus v-model="content" placeholder="请输入需编码的文本"></t-textarea>

        <div style="text-align: right;">
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="encode">HtmlEncode</t-button>
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="decode">HtmlDecode</t-button>
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
        decode() {
            this.content = ((content) => {
                let txt = document.createElement("textarea");
                txt.innerHTML = content;
                return txt.value;
            })(this.content);
        },
        encode() {
            this.content = this.content.replace(/[\u00A0-\u9999<>\&]/g, function(i) {
                return '&#'+i.charCodeAt(0)+';';
            });
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

