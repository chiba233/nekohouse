<template>
  <div class="maincard">
    <div class="allInput">
      <h1 class="title">白天</h1>
      <div class="inputDiv">
        <div class="inputContent">
          <a class="inputValue">备草</a>
          <n-input-number clearable :precision="2" class="input" round placeholder="数字"
                          v-model:value="morningGiveGrass">
            <template #suffix>
              克
            </template>
          </n-input-number>
        </div>
        <div class="inputContent">
          <a class="inputValue">喂水</a>
          <n-input-number clearable :precision="2" class="input" round placeholder="数字"
                          v-model:value="morningGiveWater">
            <template #suffix>
              克
            </template>
          </n-input-number>
        </div>
        <div class="inputContent">
          <a class="inputValue">剩了</a>
          <n-input-number clearable :precision="2" class="input" round placeholder="数字"
                          v-model:value="morningLessGrass">
            <template #suffix>
              克草
            </template>
          </n-input-number>
        </div>
        <div class="inputContent">
          <a class="inputValue">剩了</a>
          <n-input-number clearable :precision="2" class="input" round placeholder="数字"
                          v-model:value="morningLessDrink">
            <template #suffix>
              克水
            </template>
          </n-input-number>
        </div>
      </div>
      <h1 class="title">晚上</h1>
      <div class="inputDiv">
        <div class="inputContent">
          <a class="inputValue">备草</a>
          <n-input-number clearable :precision="2" class="input" round placeholder="数字"
                          v-model:value="yesterdayGiveGrass">
            <template #suffix>
              克
            </template>
          </n-input-number>
        </div>
        <div class="inputContent">
          <a class="inputValue">喝水</a>
          <n-input-number clearable :precision="2" class="input" round placeholder="数字"
                          v-model:value="yesterdayGiveWater">
            <template #suffix>
              克
            </template>
          </n-input-number>
        </div>
        <div class="inputContent">
          <a class="inputValue">剩下</a>
          <n-input-number clearable :precision="2" class="input" round placeholder="数字"
                          v-model:value="yesterdayLessGrass">
            <template #suffix>
              克草
            </template>
          </n-input-number>
        </div>
        <div class="inputContent">
          <a class="inputValue">剩了</a>
          <n-input-number clearable :precision="2" class="input" round placeholder="数字"
                          v-model:value="yesterdayLessWater">
            <template #suffix>
              克水
            </template>
          </n-input-number>
        </div>
      </div>
      <h1 class="title">杂项</h1>
      <div class="inputDiv">
        <div class="inputDiv">
          <div class="inputContent">
            <a class="inputValue">反刍</a>
            <n-input-number clearable :precision="2" class="input" round placeholder="数字"
                            v-model:value="ruminationCount">
              <template #suffix>
                次
              </template>
            </n-input-number>
          </div>
          <div class="inputContent">
            <a class="inputValue">反刍次数要求</a>
            <n-input-number class="input" round placeholder="数字" v-model:value="ruminationNeed">
              <template #suffix>
                次
              </template>
            </n-input-number>
          </div>
          <div class="inputContent">
            <a class="inputValue">饲料</a>
            <n-input-number class="input" round placeholder="数字" v-model:value="feedEaten">
              <template #suffix>
                克
              </template>
            </n-input-number>
          </div>
        </div>
      </div>
    </div>

    <div class="output">
      <div class="outputDiv">
        <n-button type="primary" class="outputButton" @click="clickOutput">
          输出
        </n-button>
      </div>
      <n-input
          type="textarea"
          class="outputInput"
          placeholder="输出"
          @focus="clipboardUse"
          v-model:value="output">
      </n-input>
      <a>{{clipboardInfo}}</a>
    </div>
    <n-alert type="info">
      可以单机输出框复制文本哦
    </n-alert>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import { useNotification } from "naive-ui";
import {NInputNumber, NButton, NInput, NAlert} from "naive-ui"
import moment from "moment/moment";
import {
  ruminationNeed,
  ruminationCount,
  yesterdayGiveGrass, morningLessGrass,
  morningGiveGrass,
  morningGiveWater,
  morningLessDrink,
  yesterdayGiveWater,
  yesterdayLessGrass,
  yesterdayLessWater,
} from "@/components/ts/useStorage"
import 'moment/dist/locale/en-au.js';
import 'moment/dist/locale/zh-cn.js';

moment.locale("zh")

const clipboardInfo =ref()
const time = ref<string>()
const output = ref<string>("")
const morningEatCount = ref<number>()
const yesterdayEatCount = ref<number>()
const morningDrinkCount = ref<number>()
const yesterdayDrinkCount = ref<number>()
const allEatCount = ref<number>()
const feedEaten = ref<number>()
const allDrinkCount = ref<number>()

function clipboardUse() {
  navigator.clipboard.writeText(output.value)
      .then(() => {
        clipboardInfo.value="复制成功"
      })
      .catch((error) => {
        clipboardInfo.value="复制到剪贴板时出错"+error
      });
}

function clickOutput() {
  morningEatCount.value = morningGiveGrass.value - morningLessGrass.value
  morningDrinkCount.value = morningGiveWater.value - morningLessDrink.value
  yesterdayEatCount.value = yesterdayGiveGrass.value - yesterdayLessGrass.value
  yesterdayDrinkCount.value = yesterdayGiveWater.value - yesterdayLessWater.value
  allEatCount.value = morningEatCount.value + yesterdayEatCount.value
  allDrinkCount.value = morningDrinkCount.value + yesterdayDrinkCount.value
  output.value = "🌟羊驼" + time.value + "结汇报" + "\n" + "1.白天备草" + morningGiveGrass.value + "克，剩余" + morningLessGrass.value + "克，吃了" +
      morningEatCount.value + "克\n2.昨晚备草" + yesterdayGiveGrass.value + "克，剩余" + yesterdayLessGrass.value + "克，吃了" + yesterdayEatCount.value +
      "克\n3.白天喂水" + morningGiveWater.value + "克，剩余" + morningLessDrink.value + "克\n" +
      "4.昨晚喂水" + yesterdayGiveWater.value + "克，剩余" + yesterdayLessWater.value + "克\n" +
      "5.昨晚喝水" + yesterdayDrinkCount.value + "克，白天喝水" + morningDrinkCount.value + "克\n" +
      "6.反刍次数要求" + ruminationNeed.value + "，反刍" + ruminationCount.value + "次\n" +
      "🌟总结：\n1.吃草总量：" + allEatCount.value + "克\n" +
      "2.饲料总量：" + feedEaten.value + "克\n" +
      "3.喝水总量：" + allDrinkCount.value + "克\n" +
      "4.反刍次数：" + ruminationCount.value + "次"
}

time.value = moment().format("MM月DD日");
console.log(time)
</script>

<style lang="scss">
.outputDiv {
  padding: 1em;
  justify-content: center;
  display: flex;
}

.title {
  display: flex;
  justify-content: center;
  font-size: 1.2em;
}

.inputDiv {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .inputContent {
    padding-top: 0.5em;
    padding-right: 0.5em;

    .inputValue {
      padding-left: 1em;
      padding-right: 1em;
    }

    .input {
      width: 13em;
    }
  }

}
</style>