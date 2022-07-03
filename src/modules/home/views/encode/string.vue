<template>
  <div style="padding: 20px">
    <!-- <t-input v-model="input" style="width:300px;float: left;" placeholder="请输入内容（有默认值）"/> -->
      <t-textarea class="mb10" autofocus v-model="content" placeholder="请输入需分割的文本"></t-textarea>
      <div style="text-align: right;margin-top: 15px;">
          <t-button style="margin-left: 20px" theme="primary" variant="base" @click="handlerReplace">分割</t-button>
      </div>
  </div>
</template>

<script>
export default {
  name: "string",
  data(){
    return {
      content:"",
      input:""
    }
  },
  methods:{
    handlerReplace(){
      this.content = this.content.replace(/&/g, "\n&")
    },
  }
}
</script>

<style scoped>
.mb10 {
  min-height: 500px !important;
}
</style>
