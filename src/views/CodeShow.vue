<template>
  <n-config-provider :hljs="hljs">
    <CodeContent />
  </n-config-provider>
</template>

<script>
  import { defineComponent, onMounted } from 'vue'
  import hljs from 'highlight.js/lib/core'
  import javascript from 'highlight.js/lib/languages/javascript'
  import CodeContent from "../components/CodeContent/index.vue"

  hljs.registerLanguage('javascript', javascript)

  export default defineComponent({
      components:{
         CodeContent 
      },
    setup() {
        onMounted(
            ()=>{
            console.log(hljs)
        })
        
      return {
        hljs
      }
    }
  })
</script>