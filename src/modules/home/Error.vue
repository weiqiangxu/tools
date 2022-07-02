<template>
    <div style="padding: 10px">
        <el-card class="box-card">
            <template v-slot:header class="clearfix">
                <span>系统提示</span>
            </template>
            <div class="text item">
                <p>抱歉，您访问的地址不存在~</p>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        mounted() {
        },
    }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>