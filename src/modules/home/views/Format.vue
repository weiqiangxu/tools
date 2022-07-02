<template>
    <div class="main">
        <div class="t-demo-tabs">
            <t-tabs v-model="selectedTab">
                <t-tab-panel value="htmlFormat" label="html/js格式化">
                    <HtmlFormat></HtmlFormat>
                </t-tab-panel>
            </t-tabs>
        </div>
    </div>
</template>

<script>
import HtmlFormat from './format/htmlFormat'
export default {
    components: {
        HtmlFormat,
    },
    data() {
        return {
            selectedTab: 'htmlFormat',
        };
    },
    watch: {
    },
    mounted() {
    },
    methods: {
    },
}
</script>

<style type="text/css" scoped>
.main {
    align-items: flex-start !important;
    display: block !important;
}
</style>