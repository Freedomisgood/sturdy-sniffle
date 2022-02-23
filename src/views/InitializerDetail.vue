<template>
    <div class="titleDiv">
        <a title="点击-立即清除缓存"><h1 @click="clearCacheAndrefresh">{{ $route.params.template }}</h1></a>
    </div>
    
    <div class="form-table-div">
            <n-form style="width: 500px;" 
            :model="configData.data" 
            :label-width="120" 
            ref="formRef"
        >
            <!-- config为每一个配置项 -->
<!--                
            <template v-for="(val, key, i) in configData.data" :key=key>

                <n-form-item size='large' :label="key">
                    <n-input v-model:value="configData.data[key]" :placeholder="val" />
                </n-form-item>
            </template>
-->                
            <template v-for="item in configData.data" :key=item>
                <n-form-item size='large' :label="showLabel(item)">
                    <n-input v-model:value="postData.data[item.field]" :placeholder="item.description" />
                </n-form-item>
                <!-- <span class="note" v-if="item.description">note: {{item.description}}</span> -->
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
        useRoute,
        useRouter
    } from "vue-router"

    import {
        getOption,
        clearCache
    } from "../api/index.js"

    import {
        combileURLandParams
    } from "../utils/index.js"

import requests from "../utils/requests/index.js"

    // 交给后端去除
    // function simplyData(params, ignore_field) {
    //     // 删除包含ignore_field的属性
    //     const res = {}
    //     for (let key in params) {
    //         if (!key.includes(ignore_field)) {
    //             res[key] = params[key]
    //         }
    //     }
    //     return res
    // }

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
            const router = useRouter()
            const template = ref(route.params.template)

            const formRef = ref(null)
            const message = useMessage()
            const configData = reactive({
                data: {}
            })
            // 表单接收参数
            const postData = reactive({
                data: {}
            })

            onMounted(
                getConfigData()
            )

            async function getConfigData() {
                let result = await getOption(template.value);
                if (result.status === 200) {
                    // let d = result.data.data
                    // console.log("d", d)
                    // if (d.length == 1) {
                    //     configData.data = simplyData(d[0], "slug")
                    // }
                    configData.data = result.data.data
                    // console.log("configData.data", configData.data)
                    
                    // 可以删除, 如果要初始化就有初值的话, 就打开
                    for (let i in configData.data){
                        let v = configData.data[i];
                        postData.data[v.field] = v.value
                    }
                    postData.data.template = template.value
                    // console.log(postData.data)
                }
            }

            async function generate() {
                var a = document.createElement('a');
                var url = combileURLandParams(requests.URLs.generate, postData.data)
                a.href = url;
                a.click();
            }
            
            function showLabel(item){
                console.log("item", item)
                if (item.description){
                    return item.field + ": " + item.description;
                }
                console.log("item.description", item.description)
                return item.field;
            }
            
            function clearCacheAndrefresh(){
                clearCache()
                router.go(0)
            }
            
            return {
                formRef,
                configData,
                generate,
                clearCacheAndrefresh,
                postData,
                showLabel
            }
        }
    })
</script>

<style scoped lang="scss">
    .form-table-div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
   
   .titleDiv {
      &:hover{
          background-color: ghostwhite;
          cursor:pointer;
      } 
   }
   
   .note{
       font-size: 8px;
       color: gray;
   }
</style>
