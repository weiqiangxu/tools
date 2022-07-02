<template>
    <div style="padding: 20px">
        <SqlEditor ref="sqleditor" :value="basicInfoForm.sqlMain" @changeTextarea="changeTextarea($event)"/>
        <div style="text-align: right;margin-top:15px;">
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="formaterSql(basicInfoForm.sqlMain)">格式化</t-button>
			<t-button style="margin-left: 20px" theme="primary" variant="outline" @click="copy">复制到剪切板</t-button>
        </div>
    </div>
</template>

<script>
import * as SQLFormatter from "sql-formatter";
import SqlEditor from "./sqlEditor";
export default {
	components: {
		SqlEditor,
	},
	data() {
		return {
			basicInfoForm: {
				sqlMain: "",
			},
		};
	},
	methods: {
		changeTextarea(val) {
			this.$set(this.basicInfoForm, "sqlMain", val);
		},
		formaterSql(val) {
			let dom = this.$refs.sqleditor;
			dom.editor.setValue(SQLFormatter.format(dom.editor.getValue()));
		},
		copy() {
            this.$copyText(this.basicInfoForm.sqlMain).then(() => {
                this.$message.success('复制成功');
            });
        }
	},
}
</script>

<style  lang="less">
.t-textarea__inner {
	min-height: 600px !important;
}
</style>