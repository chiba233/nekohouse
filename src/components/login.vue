<template>
  <div v-if="passwordIsTrue===false" class="login">
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
      <div>
        <n-alert type="info" v-if="loginFailedStatus" class="tips">
          登录失败请重试
        </n-alert>
      </div>
      <div>
        <n-button type="primary" class="loginButton" @click="testPassword(password)">
          登录
        </n-button>
      </div>
      <div class="copyrightLoginDiv">
        <a>嘤嘤怪制作</a>
      </div>
      <div class="copyrightLoginDiv">
        <a> 仅授权:喵庄园及它它派对使用</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {password, passwordIsTrue, testPassword, loginFailedStatus} from "@/components/ts/useStorage";
import {NInput, NButton, NAlert} from 'naive-ui'
</script>


<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  .copyrightLoginDiv {
    display: flex;
    justify-content: center;
    margin-top: 0.5em;
  }

  .loginButton {
    width: 5em;
    margin-top: 1em;
  }

  .tips {
    margin-top: 1em;
    margin-left: 1em;
    margin-right: 1em;
  }

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

      .passwordInput {
        width: 15em;
      }
    }

  }
}


</style>