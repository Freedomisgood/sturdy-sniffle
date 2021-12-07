<template>
    <div style="overflow: auto;">
        <n-space vertical :size="16">
            <n-code :code="`
  function sleep (ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  `" language="javascript" />

            <n-code :code="`
  def say_hello():
      print('Hello Naive UI')
  `" language="python" />
            <n-code :code="cppCode" language="cpp" />
        </n-space>
    </div>
</template>

<script>
    import {
        defineComponent
    } from 'vue'
    import { NCode } from "naive-ui"

    export default defineComponent({
        components:{
            NCode
        },
        setup() {
            return {
                cppCode: `int main () {
  std::cout << "Hello Naive UI";
  return 0;
}`
            }
        }
    })
</script>
