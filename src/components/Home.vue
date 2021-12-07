<template>
    <div class="container">
        <n-layout position="absolute">
            <Header class="header" />
            <n-layout has-sider position="absolute" class="content" sider-placement="right">
                <Sider :inverted="themecolor" />
                <n-layout content-style="padding: 24px;">
                    <Breadcrumb />
                    <n-message-provider>
                        <router-view></router-view>
                    </n-message-provider>
                </n-layout>
            </n-layout>
        </n-layout>
    </div>
</template>


<script>
    import Header from "./Header/index.vue"
    import Sider from "./Sider/index.vue"
    import Breadcrumb from "./Breadcrumb/index.vue"
    import {
        NLayout,
        NLayoutSider,
        NSpace
    } from "naive-ui"
    import {
        ref
    } from "vue"

    export default {
        components: {
            Header,
            Sider,
            Breadcrumb,
            NLayout,
            NLayoutSider,
            NSpace
        },
        setup() {
            let themecolor = ref(false)

            let themeChangeHandle = (val) => {
                themecolor.value = val
                console.log('主题变色', themecolor.value)
            }

            return {
                themecolor,
                themeChangeHandle,
            }
        }
    }
</script>

<style lang="scss">
    $headerHeight: 100px;

    .container {
        position: relative;
        height: 200vh;

        .content {
            min-height: calc(2000vh - 56px);
            top: $headerHeight;
            bottom: 56px;
        }

        // 子组件的标签上不需要再加同样的class
        .header {
            height: $headerHeight;
        }
    }
</style>
