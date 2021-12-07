<template>
    <n-layout-header :inverted="thethemecolor" bordered>
         <n-gradient-text type="success"> Sucsoft Initializer</n-gradient-text>
    </n-layout-header>
</template>

<script>
    import {
        defineComponent,
        ref
    } from "vue"
    import {
        NLayoutHeader,
        NSpace,
        NSwitch,
        NGradientText
    } from "naive-ui"


    export default defineComponent({
        name: "Header",
        components: {
            NLayoutHeader,
            NSpace,
            NSwitch,
            NGradientText
        },
        setup(props, {
            emit
        }) {
            let thethemecolor = ref(props.themecolor)
            let handleChange = (value) => {}
            return {
                thethemecolor,
                handleChange
            }
        }
    })
</script>

<style>
    .title{
        font-size: 28px;
    }
    .n-gradient-text {
      font-size: 36px;
    }
</style>
