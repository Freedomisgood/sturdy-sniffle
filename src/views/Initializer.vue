<template>
    <div class="container">
        <div class="clearTitle">
            <a title="点击-立即清除缓存"><h1 @click="clearCacheAndrefresh">所有模板</h1></a>
        </div>

        <div class="boxes">
              <n-grid :x-gap="12" :y-gap="8" :cols="4">
                <n-grid-item v-for="item in configs" :key="item">
                  <n-card class="card"  :title="item.template_name" embedded :bordered="false" 
                  @click.stop="goto(item)"
                    > 
                    <div style="font-size: 1.2em;">{{ showText(item.description) }}</div>
                    <br/>
                    <em>{{ item.committed_date }}</em>
                    </n-card
                  >
                </n-grid-item>
              </n-grid>
        </div>
    </div>
</template>

<script>
    import {defineComponent, onMounted, ref, computed} from 'vue'
    import { useRouter } from "vue-router"
    
    import { getAllOptions, clearCache } from "../api/index.js"
    import { NCard } from "naive-ui"    
    
    export default defineComponent({
        components: {
            NCard
        },
        setup(){
            const configs = ref([])
            const router = useRouter()
            
            onMounted(
                init()
            )
            
            async function init(){
                let result = await getAllOptions();
                console.log("result", result)
                if (result.status === 200) {
                    configs.value = result.data.data
                    console.log("configs.value", configs.value[0])
                }
            }
            
            function goto(item){
                console.log({
                    name: "InitializerDetail",
                    params: {
                        template: item.template_name
                    }
                })
                router.push({
                    name: "InitializerDetail",
                    params: {
                        template: item.template_name
                    }
                })
            }
            
            function showText(text){
                if (text.length == 0){
                    return "这个工程很差, 什么都没描述"
                }
                return text;
            }
            
            
            function clearCacheAndrefresh(){
                clearCache()
                router.go(0)
            }
            
            return {
                configs,
                goto,
                showText,
                // clearCache,
                clearCacheAndrefresh
            }
        },
    })
</script>

<style scoped lang="scss">
    .card {
        height: 250px;
        background-color: gainsboro;
        
        &:hover{
            background-color: lightgoldenrodyellow;
            cursor:pointer;
        }
    }
    

    .clearTitle{
        // .reminder {
        //     display: none;
        //     margin-top: 1px;
        // }
        
       &:hover{
           // .reminder {
           //     background-color: lightyellow;
           //     color: red;
           //     display: inline;
           // }
           background-color: ghostwhite;
           cursor:pointer;
       } 
    }
</style>
