<template>
  <div style="padding: 20px">
      <t-textarea class="mb10" autofocus v-model="content" placeholder="请输入需编码的文本"></t-textarea>

      <div style="text-align: right;">
          <t-button style="margin-left: 20px" theme="primary" variant="base" @click="handlerBase64Encode">Base64Encode</t-button>
          <t-button style="margin-left: 20px" theme="primary" variant="base" @click="handlerBase64Decode">Base64Decode</t-button>
          <t-button style="margin-left: 20px" theme="primary" variant="outline" @click="copy">复制到剪切板</t-button>
      </div>
  </div>
</template>

<script>
export default {
  name: "base64",
  data(){
    return {
      content:""
    }
  },
  methods:{
    handlerBase64Encode(){
      this.content = window.btoa(escape(this.content))
    },
    handlerBase64Decode(){
      this.content = unescape(window.atob(this.content))
    },
    copy(){
      this.$copyText(this.content).then(() => {
                this.$message.success('复制成功');
      });
    }
  }
}
</script>

<style scoped>

</style>
