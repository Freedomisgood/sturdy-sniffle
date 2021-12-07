<template>
    <n-layout-sider class="height" bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="240"
        :native-scrollbar="false" :inverted="thethemecolor">
        <n-menu :inverted="thethemecolor" :collapsed-width="64" :collapsed-icon-size="22" default-expand-all="true"
            @update:value="handleUpdateValue" :options="navs" :value="active" />
    </n-layout-sider>
</template>

<script>
    import {
        defineComponent,
        ref,
        watch,
        onMounted
    } from "vue";
    import {
        useRouter,
        useRoute
    } from "vue-router";
    import routes from "@/router/routes";
    import {
        deepClone
    } from "@/utils/index";
    import {
        NIcon,
        NMenu,
        NLayoutSider,
    } from 'naive-ui'

    // 过滤掉routes中hide为true的路由
    function filterNavs(ary) {
        let i = 0
        while (i < ary.length){
            if ( ary[i].children ){
                filterNavs(ary[i].children)
                i++
            }else if ( typeof(ary[i], Number)){
                if ( ary[i].hide == true ){
                    ary.splice(i, 1);
                }else{
                    i ++
                }
            }
        }
        return ary
    }

    export default defineComponent({
        name: "Sidebar",
        components: {
            NLayoutSider,
            NMenu
        },
        setup(props) {
            const router = useRouter();
            const route = useRoute();
            const navs = filterNavs(deepClone(routes));
            let active = ref("");
            let thethemecolor = props.themecolor

            const handleUpdateValue = (key, item) => {
                active.value = key;
                router.push({
                    path: item.path
                });
            };
            

            watch(
                () => route.path,
                () => {
                    if (!route.children) {
                        active.value = route.name;
                    }
                }, {
                    immediate: true,
                    deep: true
                }
            );
            

            return {
                thethemecolor,
                navs,
                active,
                handleUpdateValue,
            };
        },
    });
</script>

<style>
</style>
