<template>
    <h1>{{ $route.params.template }} </h1>
    <div class="form-table-div">
        <n-form style="width: 500px;" :model="configData.data" :label-width="120" ref="formRef">
            <!-- config为每一个配置项 -->
            <template v-for="(val, key, i) in configData.data" :key=key>
                <n-form-item size='large' :label="key">
                    <n-input v-model:value="configData.data[key]" :placeholder="val" />
                </n-form-item>
            </template>
        </n-form>
    </div>

    <div style="display: flex; justify-content: center;">
        <n-button round type="primary" @click="generate">
            生成
        </n-button>
    </div>

</template>

<script>
    import {
        defineComponent,
        ref,
        onMounted,
        reactive,
        computed
    } from 'vue'
    import {
        useMessage,
        NFormItem,
        NInput,
        NButton,
        NForm,
        NRadioGroup,
        NRadioButton,
    } from 'naive-ui'
    import {
        useRoute
    } from "vue-router"

    import {
        getOption,
        doGenerte
    } from "../api/index.js"

    import {
        combileURLandParams
    } from "../utils/index.js"


    function simplyData(params, str) {
        const res = {}
        for (let key in params) {
            if (!key.includes(str)) {
                res[key] = params[key]
            }
        }
        return res
    }

    export default defineComponent({
        components: {
            NFormItem,
            NInput,
            NButton,
            NForm,
            NRadioGroup,
            NRadioButton,
        },

        setup() {
            const route = useRoute()
            const template = ref(route.params.template)
            
            const formRef = ref(null)
            const message = useMessage()
            const configData = reactive({
                data: {}
            })

            onMounted(
                getConfigData()
            )

            async function getConfigData() {
                let result = await getOption(template.value);
                if (result.status === 200) {
                    let d = result.data.data
                    if (d.length == 1) {
                        configData.data = simplyData(d[0], "slug")
                    }
                }
            }

            async function generate() {
                var a = document.createElement('a');
                let params = { ...configData.data } 
                params.template = template.value
                
                var url = combileURLandParams("http://127.0.0.1:5501/api/v1/generate", params)
                a.href = url;
                a.click();
            }


            return {
                formRef,
                configData,
                generate
            }
        }
    })
</script>


<style type="scss">
    .form-table-div {
        display: flex;
        align-items: center;
        justify-content: center;
        
  
    }
</style>
