<template>
  <div v-if="password!==commonSettings.password" class="login">
    <div class="loginWindow">
      <H1 class="title">登录</H1>
      <div class="passwordInputDiv">
      <n-input
          class="passwordInput"
          type="password"
          show-password-on="mousedown"
          placeholder="密码"
          v-model:value="password"
      />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {password} from "@/components/ts/useStorage";
import commonSettings from "@/info/common.json";
import {NInput, NButton, NModal} from 'naive-ui'

console.log(password.value)
</script>


<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .loginWindow {
    width: 20em;
    display: flex;
    flex-direction: column;
    height: 20em;
    justify-content: center;
    text-align: center;
    background-color: aliceblue;

    .passwordInputDiv {
      width: 20em;
      .passwordInput{
        width: 15em;
      }
    }

  }
}


</style>