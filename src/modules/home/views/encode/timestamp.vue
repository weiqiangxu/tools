<template>
    <div style="position: relative; padding: 20px; left: 20%">
        <div class="mb20">
            <t-form v-model="form1" layout="inline" :labelWidth="labelWidth">
                <t-form-item label="Unix时间戳(s)">
                    <t-input style="width: 220px;" v-model="form1.srcVal" clearable></t-input>
                </t-form-item>
                <t-form-item>
                    <t-button style="width: 120px;" theme="primary" @click="stampToStr">
                        转时间字符串
                        <t-icon name="arrow-right"/>
                    </t-button>
                </t-form-item>
                <t-form-item>
                    <t-input style="width: 220px;" v-model="form1.targetVal" clearable></t-input>
                </t-form-item>
            </t-form>
        </div>

        <div class="mb20">
            <t-form v-model="form1" layout="inline" :labelWidth="labelWidth">
                <t-form-item label="Unix时间戳(ms)">
                    <t-input style="width: 220px;" v-model="form2.srcVal" clearable></t-input>
                </t-form-item>
                <t-form-item>
                    <t-button style="width: 120px;" theme="primary" @click="msStampToStr">
                        转时间字符串
                        <t-icon name="arrow-right"/>
                    </t-button>
                </t-form-item>
                <t-form-item>
                    <t-input style="width: 220px;" v-model="form2.targetVal" clearable></t-input>
                </t-form-item>
            </t-form>
        </div>

        <div class="mb20">
            <t-form v-model="form1" layout="inline" :labelWidth="labelWidth">
                <t-form-item label="时间字符串">
                    <t-input style="width: 220px;" v-model="form3.srcVal" clearable></t-input>
                </t-form-item>
                <t-form-item>
                    <t-button style="width: 120px;" theme="primary" @click="strToTime">
                        转时间戳
                        <t-icon name="arrow-right"/>
                    </t-button>
                </t-form-item>
                <t-form-item>
                    <t-input style="width: 220px;" v-model="form3.targetVal" clearable></t-input>
                </t-form-item>
            </t-form>
        </div>
    </div>
</template>

<script>
import * as commonFunc from "@/lib/commonFunc"
export default {
    data() {
        return {
            labelWidth: 140,
            form1: {
                srcVal: '',
                targetVal: '',
            },
            form2: {
                srcVal: '',
                targetVal: '',
            },
            form3: {
                srcVal: '',
                targetVal: '',
            },
        }
    },
    mounted() {
        let date = new Date();
        this.form1.srcVal = Date.parse(date) / 1000;
        this.form2.srcVal = date.getTime();
        this.form3.srcVal = commonFunc.formatDate();
    },
    methods: {
        stampToStr() {
            if (!this.form1.srcVal) {
                return;
            }

            let date = new Date(this.form1.srcVal * 1000);
            return this.form1.targetVal = commonFunc.formatDate(date);
        },
        msStampToStr() {
            if (!this.form2.srcVal) {
                return;
            }

            let date = new Date(this.form2.srcVal);
            return this.form2.targetVal = commonFunc.formatDate(date, 'yyyy-MM-dd hh:mm:ss SSS');
        },
        strToTime() {
            if (!this.form3.srcVal) {
                return;
            }

            this.form3.targetVal = commonFunc.strToTime(this.form3.srcVal);
        },

    }
}
</script>


