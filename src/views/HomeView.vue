<template>
  <div>
<Login></Login>
  </div>
<div v-if="password===commonSettings.password">
  <caculator></caculator>
</div>
</template>



<script setup lang="ts">
import {password} from "@/components/ts/useStorage";
import commonSettings from "@/info/common.json"
import Login from "@/components/login.vue";
import Caculator from "@/components/caculator.vue";

</script>

<style>

</style>
