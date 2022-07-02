<template>
    <div class="crontab-main">
        <div class="mb20 crontab-explain">
            <div class="mb10">CRON表达式是一个字符串，包含五个到七个由空格分隔的字段（每种软件不一样），表示一组时间，通常作为执行某个程序的时间表。</div>
            <div class="mb10">注释以注释标记#开始，并且必须单独在一行上。</div>
        </div>
        <div class="mb10">
            <span style="color: #f01">0 */12 * * *</span> [user] [command] 请只输入红色部分。
        </div>
        <t-form class="mb20" layout="inline">
            <t-form-item label="CRON表达式:">
                <t-input v-model="str" clearable style="width: 400px"></t-input>
            </t-form-item>
            <t-form-item>
                <t-button theme="primary" variant="base" @click="caculatePlan">查询执行时间</t-button>
            </t-form-item>
        </t-form>
        <div class="mb20 crontab-example">
            <div>说明：</div>
            <pre>
                <code>
*     *     *     *     *     *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    |
│    │    │    │    │    └ day of week (0 - 7, 1L - 7L) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31, L)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, optional)
                </code>
            </pre>
        </div>

        <div class="mb20" v-if="plan.length > 0">
            <h3>接下来7次的执行时间：</h3>
            <div class="crontab-plan-list" v-for="p in plan">
                <div class="crontab-plan-item">{{p}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import * as commonFunc from "@/lib/commonFunc"
export default {
    data() {
        return {
            str: '0 */12 * * *',
            plan: [
            ],
        }
    },
    mounted() {},
    methods: {
        caculatePlan() {
            if (!this.str) {
                return;
            }

            let parser = require('cron-parser');
            try {
                this.plan = [];
                let interval = parser.parseExpression(this.str);
                for (let i = 0; i < 7; i++) {
this.plan.push(commonFunc.formatDate(interval.next().toString()));
                }
            } catch (err) {
                console.log('Error: ' + err.message);
            }
        }
    },
}
</script>

<style type="text/css" scoped>
    .crontab-main {
        text-align: left;
        align-items: flex-start !important;
        display: block !important;
        padding: 30px;
    }
    .crontab-plan-list {
        /*border: 1px solid #ccc;*/
    }
    .crontab-plan-item {
        padding: 10px;
        margin: 0;
        border: 1px solid #ccc;
    }
    .crontab-example {
        /*background-color: #8c939d;*/
    }
</style>