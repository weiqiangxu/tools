<template>
    <div class="main">
        <div class="t-demo-tabs">
            <t-tabs v-model="selectedTab">
                <t-tab-panel value="SQLFormat" label="SQL格式化">
                    <SQLFormat></SQLFormat>
                </t-tab-panel>
            </t-tabs>
        </div>
    </div>
</template>

<script>
import SQLFormat from './format/SQLFormat'
export default {
    components: {
        SQLFormat,
    },
    data() {
        return {
            selectedTab: 'SQLFormat',
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