<template>
    <div style="padding: 20px">
        <t-row justify="space-between">
            <t-col :span="5">
                <div>
                    <t-textarea class="mb10" autofocus v-model="sourecContent" placeholder="请把你需要转换的内容粘贴在这里"></t-textarea>
                </div>
            </t-col>
            <t-col :span="6">
                <div><t-textarea class="mb10" autofocus v-model="targetContent" placeholder="转换后的结果"></t-textarea></div>
            </t-col>
        </t-row>
        <div style="text-align: right;margin-top:15px;">
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="asciiToUnicode">ASCII转Unicode</t-button>
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="UnicodeToAscii">Unicode转ASCII</t-button>
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="UnicodeToCh">Unicode转中文</t-button>
            <t-button style="margin-left: 20px" theme="primary" variant="base" @click="chnToUnicode">中文转Unicode</t-button>
            <t-button style="margin-left: 20px" theme="primary" variant="outline" @click="copy">复制到剪切板</t-button>
        </div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			sourecContent: "",
			targetContent: "",
		};
	},
	mounted() {},
	methods: {
		chnToUnicode() {
			if (this.sourecContent == "") {
				return;
			}
			this.targetContent = this.chnToUnicodeTool(this.sourecContent);
		},
		UnicodeToAscii() {
			if (this.sourecContent == "") {
				return;
			}
			this.targetContent = this.unicode1(this.sourecContent);
		},
		asciiToUnicode() {
			if (this.sourecContent == "") {
				return;
			}
			this.targetContent = this.reconvert(this.sourecContent);
		},
		UnicodeToCh() {
			console.log("UnicodeToCh - ", this.sourecContent);
			if (this.sourecContent == "") {
				return;
			}
			this.targetContent = this.reconvert(this.sourecContent);
		},
		clear() {
			this.content = "";
		},
		copy() {
			this.$copyText(this.content).then(() => {
				this.$message.success("复制成功");
			});
		},
		//  https://www.jb51.net/article/99274.htm
		// Unicode转中文汉字、ASCII转换Unicode
		reconvert(str) {
			str = str.replace(/(\\u)(\w{1,4})/gi, function ($0) {
				return String.fromCharCode(
					parseInt(escape($0).replace(/(%5Cu)(\w{1,4})/g, "$2"), 16)
				);
			});
			str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) {
				return String.fromCharCode(
					parseInt(
						escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"),
						16
					)
				);
			});
			str = str.replace(/(&#)(\d{1,6});/gi, function ($0) {
				return String.fromCharCode(
					parseInt(
						escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2")
					)
				);
			});
			return str;
		},
		// https://www.jb51.net/article/99274.htm
		// Unicode转换ASCII
		unicode1(str) {
			var value = "";
			for (var i = 0; i < str.length; i++)
				value += "&#" + str.charCodeAt(i) + ";";
			return value;
		},
		// 中文汉字转Unicode
		chnToUnicodeTool(str) {
			var value = "";
			for (var i = 0; i < str.length; i++) {
				value +=
					"\\u" +
					this.left_zero_4(parseInt(str.charCodeAt(i)).toString(16));
			}
			return value;
		},
		left_zero_4(str) {
			if (str != null && str != "" && str != "undefined") {
				if (str.length == 2) {
					return "00" + str;
				}
			}
			return str;
		},
	},
};
</script>

<style lang="less">
</style>
