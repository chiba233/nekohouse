<template>
  <div>
<Login></Login>
  </div>
  <div v-if="passwordIsTrue">
  <n-tabs type="line" animated class="tab">
    <n-tab-pane tab="羊驼计算器" name="alpacaCal">
        <Calculator></Calculator>
    </n-tab-pane>
    <n-tab-pane name="the beatles" tab="敬请期待">
      敬请期待
    </n-tab-pane>
  </n-tabs>
  </div>
  <div class="copyrightDiv" v-if="passwordIsTrue">
  <a>嘤嘤怪制作 仅授权:喵庄园及它它派对使用</a>
  </div>

</template>



<script setup lang="ts">
import {passwordIsTrue} from "@/components/ts/useStorage"
import Login from "@/components/login.vue";
import Calculator from "@/components/calculator.vue";
import {NTabs,NTabPane} from "naive-ui";

</script>

<style>
.tab{
  display: flex;
  align-items: center;
}
.copyrightDiv{
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}
</style>
