import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router/index.js'


import {
    create,
    // component
    NButton,
    NLayout,
    NMessageProvider,
    NSpace,
    NGrid,
    NGridItem

} from 'naive-ui'

const naive = create({
    components: [
        NButton,
        NLayout,
        NMessageProvider,
        NSpace,
        NGrid,
        NGridItem
    ]
})


createApp(App)
    .use(router)
    .use(naive)
    .mount('#app')
