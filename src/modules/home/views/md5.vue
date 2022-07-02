<template>
    <div class="urlencode-main" style="padding: 20px">
        <t-row :gutter="16">
            <t-col :span="6">
                <div>
                    <t-textarea class="mb10" autofocus v-model="content" placeholder="请把你需要转换的内容粘贴在这里"></t-textarea>
                </div>
            </t-col>
            <t-col :span="6">
                <div><t-textarea class="mb10" autofocus v-model="md5Str" placeholder="转换后的结果"></t-textarea></div>
            </t-col>
        </t-row>
        <div style="text-align: right;">
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="handlerMd5Click">加密</t-button>
            <t-button style="margin-left: 20px" theme="primary" variant="outline" @click="copy">复制到剪切板</t-button>
        </div>
    </div>
</template>
  
  <script>
      import md5 from "js-md5";
  export default {
    name: "md5",
    data(){
      return {
        content:"",
        md5Str:""
      }
    },
    methods:{
        handlerMd5Click(){
            this.md5Str = md5(this.content)
        },
        copy() {
            this.$copyText(this.md5Str).then(() => {
                this.$message.success('复制成功');
            });
        }
    }
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
        min-height: 300px !important;
    }
</style>
  