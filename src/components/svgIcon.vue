<template>
	<svg v-html="icon" class="svg-icon" :style="style"></svg>
</template>
<script>
	export default {
		props: ["name","size"],
		data() {
			return {
				style:{},
                sizeVal: "",
			}
		},
        mounted() {
		    this.sizeVal = this.size;
        },
        watch: {
            // eslint-disable-next-line no-mixed-spaces-and-tabs
		    "size": function(newVal) {
                // eslint-disable-next-line no-mixed-spaces-and-tabs
		        this.sizeVal = newVal
            },
        },
		computed:{
			icon: function(){
				//使用了svg-inline-loader来加载svg文件，需要在webpack.config.js配置
				//svg目录/src/svg/
				let svgHtml = require(`../svg/${this.name}.svg`)
				svgHtml = svgHtml.replace(/<style.*?>.*?<\/style>/ig, "")
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
				this.sizeVal = this.sizeVal || 16;
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
				this.style = {width:this.sizeVal+'px',height:this.sizeVal+'px'}
				return svgHtml
			}
		}
	}
</script>
<style lang="less">
.svg-icon{
	display: inline-block;
	margin-right:3px;
	fill: currentColor;
	cursor: pointer;
	svg {
		display: inline-block;
		fill: currentColor;
	}
}

</style>