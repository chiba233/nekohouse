<template>
  <div>
<Login></Login>
  </div>
<div v-if="passwordIsTrue">
  <caculator></caculator>
</div>
</template>



<script setup lang="ts">
import {passwordIsTrue} from "@/components/ts/useStorage"
import Login from "@/components/login.vue";
import Caculator from "@/components/caculator.vue";

</script>

<style>

</style>
