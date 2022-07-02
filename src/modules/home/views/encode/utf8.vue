<template>
    <div style="padding: 20px">
        <t-row :gutter="16">
            <t-col :span="6">
                <div>
                    <t-textarea class="mb10" autofocus v-model="encodeContent" placeholder="请输入需编码的文本"></t-textarea>
                </div>
            </t-col>
            <t-col :span="6">
                <div><t-textarea class="mb10" autofocus v-model="decodeContent" placeholder="请输入需解码的文本"></t-textarea></div>
            </t-col>
        </t-row>
        <div style="text-align: right;">
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="encode">UTF8Encode</t-button>
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="decode">UTF8Decode</t-button>
            <t-button style="margin-left: 20px" theme="primary" variant="outline" @click="copy">复制到剪切板</t-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            encodeContent: '',
            decodeContent: '',
        }
    },
    mounted() {

    },
    methods: {
        decode() {
            //this.content = unescape(this.content.replaceAll('+', '%20'));
            if(this.decodeContent == ''){
                return
            }
            this.encodeContent = unescape(this.decodeContent.replace(/&#x/g, '%u').replace(/;/g, ''));
        },
        encodeUtf8(string) {
            string = string.replace(/[^\u0000-\u00FF]/g,function($0) {
                return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;")
            })
            return string
        },
        encode() {
            if(this.encodeContent == ''){
                return
            }
            this.decodeContent = this.encodeUtf8(this.encodeContent);
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
