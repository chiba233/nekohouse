<template>
  <div class="allInput">
    <h1 class="title">白天</h1>
    <div class="inputDiv">
      <div class="inputContent">
        <a class="inputValue">备草</a>
        <n-input-number clearable :precision="1" class="input" :min="0" round placeholder="数字"
                        v-model:value="morningGiveGrass">
          <template #suffix>
            克
          </template>
        </n-input-number>
      </div>
      <div class="inputContent">
        <a class="inputValue">喂水</a>
        <n-input-number clearable :precision="1" class="input" :min="0" round placeholder="数字"
                        v-model:value="morningGiveSaltWater">
          <template #suffix>
            盐水
          </template>
        </n-input-number>
      </div>
      <div class="inputContent">
        <a class="inputValue">喂水</a>
        <n-input-number clearable :precision="1" class="input" :min="0" round placeholder="数字"
                        v-model:value="morningGiveCommonWater">
          <template #suffix>
            清水
          </template>
        </n-input-number>
      </div>
      <div class="inputContent">
        <a class="inputValue">剩了</a>
        <n-input-number clearable :precision="1" class="input" :min="0" round placeholder="数字"
                        v-model:value="morningLessGrass">
          <template #suffix>
            克草
          </template>
        </n-input-number>
      </div>
      <div class="inputContent">
        <a class="inputValue">剩了</a>
        <n-input-number clearable :precision="1" class="input" :min="0" round placeholder="数字"
                        v-model:value="morningLessSaltDrink">
          <template #suffix>
            盐水
          </template>
        </n-input-number>
      </div>
      <div class="inputContent">
        <a class="inputValue">剩了</a>
        <n-input-number clearable :precision="1" class="input" :min="0" round placeholder="数字"
                        v-model:value="morningLessCommonDrink">
          <template #suffix>
            清水
          </template>
        </n-input-number>
      </div>
    </div>
    <h1 class="title">晚上</h1>
    <div class="inputDiv">
      <div class="inputContent">
        <a class="inputValue">备草</a>
        <n-input-number clearable :precision="1" class="input" :min="0" round placeholder="数字"
                        v-model:value="yesterdayGiveGrass">
          <template #suffix>
            克
          </template>
        </n-input-number>
      </div>
      <div class="inputContent">
        <a class="inputValue">喂水</a>
        <n-input-number clearable :precision="1" class="input" :min="0" round placeholder="数字"
                        v-model:value="yesterdayGiveSaltDrink">
          <template #suffix>
            盐水
          </template>
        </n-input-number>
      </div>
      <div class="inputContent">
        <a class="inputValue">喂水</a>
        <n-input-number clearable :precision="1" class="input" :min="0" round placeholder="数字"
                        v-model:value="yesterdayGiveCommonDrink">
          <template #suffix>
            清水
          </template>
        </n-input-number>
      </div>
      <div class="inputContent">
        <a class="inputValue">剩下</a>
        <n-input-number clearable :precision="1" :min="0" class="input" round placeholder="数字"
                        v-model:value="yesterdayLessGrass">
          <template #suffix>
            克草
          </template>
        </n-input-number>
      </div>
      <div class="inputContent">
        <a class="inputValue">剩下</a>
        <n-input-number clearable :precision="1" :min="0" class="input" round placeholder="数字"
                        v-model:value="yesterdayLessSaltDrink">
          <template #suffix>
            盐水
          </template>
        </n-input-number>
      </div>
      <div class="inputContent">
        <a class="inputValue">剩下</a>
        <n-input-number clearable :precision="1" :min="0" class="input" round placeholder="数字"
                        v-model:value="yesterdayLessCommonDrink">
          <template #suffix>
            清水
          </template>
        </n-input-number>
      </div>
    </div>
    <h1 class="title">杂项</h1>
    <div class="inputDiv">
      <div class="inputDiv">
        <div class="inputContent">
          <a class="inputValue">反刍</a>
          <n-input-number clearable class="input" :min="0" round placeholder="数字"
                          v-model:value="ruminationCount">
            <template #suffix>
              次
            </template>
          </n-input-number>
        </div>
        <div class="inputContent">
          <a class="inputValue">反刍次数要求</a>
          <n-input-number class="input" round placeholder="数字" :min="0" v-model:value="ruminationNeed">
            <template #suffix>
              次
            </template>
          </n-input-number>
        </div>
        <div class="inputContent">
          <a class="inputValue">饲料</a>
          <n-input-number class="input" round placeholder="数字" :min="0" :precision="1" v-model:value="feedEaten">
            <template #suffix>
              克
            </template>
          </n-input-number>
        </div>
      </div>
    </div>
  </div>

  <div class="output">
    <div class="outputButtons">
      <n-button type="primary" class="outputButton" @click="clickOutput">
        输出
      </n-button>
      <n-button type="primary" class="outputButton" @click="cleanAll">
        清空
      </n-button>
    </div>
    <div class="outputWindow">
      <n-alert type="info"  class="tips">
        {{ tipsData }}
      </n-alert>
      <n-alert type="info" v-if="errorStatus" class="tips">
        {{ dataError }}
      </n-alert>
      <n-alert type="info" v-if="clipboardStatus===true" class="tips">
        {{ clipboardInfo }}
      </n-alert>
      <n-input
          type="textarea"
          class="outputInput"
          placeholder="输出"
          @focus="clipboardUse"
          v-model:value="output">
      </n-input>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {NInputNumber, NButton, NInput, NAlert} from "naive-ui"
import moment from "moment/moment";
import {
  ruminationNeed,
  ruminationCount,
  yesterdayGiveGrass,
  morningLessGrass,
  morningGiveGrass,
  yesterdayGiveSaltDrink,
  yesterdayLessGrass,
  morningLessSaltDrink,
  morningLessCommonDrink,
  morningGiveCommonWater,
  morningGiveSaltWater,
  yesterdayLessSaltDrink, yesterdayLessCommonDrink, yesterdayGiveCommonDrink, passwordIsTrue
} from "@/components/ts/useStorage"
import 'moment/dist/locale/en-au.js';
import 'moment/dist/locale/zh-cn.js';

moment.locale("zh")


const clipboardInfo = ref()
const time = ref<string>()
const output = ref<string>("")
const morningEatCount = ref<number>()
const yesterdayEatCount = ref<number>()
const morningDrinkCount = ref<number>()
const yesterdayDrinkCount = ref<number>()
const allEatCount = ref<number>()
const feedEaten = ref<number>(0)
const allDrinkCount = ref<number>()
const morningGiveWater = ref<number>()
const morningLessDrink = ref<number>()
const yesterdayGiveWater = ref<number>()
const yesterdayLessWater = ref<number>()
const clipboardStatus = ref<boolean>(false)
const dataError = ref<string>("")
const errorStatus = ref<boolean>(false)
const tipsData =ref<string>("可以单机输出框复制文本哦")

if (passwordIsTrue.value){
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.target === document.body) {
      clickOutput();
    }
  });
}

function clipboardUse() {
  navigator.clipboard.writeText(output.value)
      .then(() => {
        clipboardStatus.value = true
        clipboardInfo.value = "复制成功"
        setTimeout(function (){clipboardStatus.value = false},4000)
      })
      .catch((error) => {
        clipboardStatus.value = true
        clipboardInfo.value = "复制到剪贴板时出错" + error
        setTimeout(function (){clipboardStatus.value = false},4000)
      });
}

function cleanAll() {
  ruminationCount.value = 0
      yesterdayGiveGrass.value = 0
      morningLessGrass.value = 0
      morningGiveGrass.value = 0
      yesterdayGiveSaltDrink.value = 0
      yesterdayLessGrass.value = 0
      morningLessSaltDrink.value = 0
      morningLessCommonDrink.value = 0
      morningGiveCommonWater.value = 0
      morningGiveSaltWater.value = 0
      yesterdayLessSaltDrink.value = 0
      yesterdayLessCommonDrink.value = 0
      yesterdayGiveCommonDrink.value = 0
}

function clickOutput() {
  morningGiveWater.value = morningGiveSaltWater.value + morningGiveCommonWater.value
  morningLessDrink.value = morningLessCommonDrink.value + morningLessSaltDrink.value
  yesterdayLessWater.value = yesterdayLessSaltDrink.value + yesterdayLessCommonDrink.value
  yesterdayGiveWater.value = yesterdayGiveCommonDrink.value + yesterdayGiveSaltDrink.value
  //上面计算的总水量
  morningEatCount.value = morningGiveGrass.value - morningLessGrass.value
  morningDrinkCount.value = morningGiveWater.value - morningLessDrink.value
  yesterdayEatCount.value = yesterdayGiveGrass.value - yesterdayLessGrass.value
  yesterdayDrinkCount.value = yesterdayGiveWater.value - yesterdayLessWater.value
  allEatCount.value = morningEatCount.value + yesterdayEatCount.value
  allDrinkCount.value = morningDrinkCount.value + yesterdayDrinkCount.value
  errorStatus.value = false
  if (feedEaten.value <= 0) {
    dataError.value = "为什么没喂饲料"
    errorStatus.value = true
    setTimeout(function (){errorStatus.value = false},4000)
  }
  if (yesterdayLessSaltDrink.value >= yesterdayGiveSaltDrink.value) {
    dataError.value = "昨天盐水数据错误，请检查后填写"
    errorStatus.value = true
    setTimeout(function (){errorStatus.value = false},4000)
  }
  if (yesterdayLessCommonDrink.value >= yesterdayGiveCommonDrink.value) {
    dataError.value = "昨天清水数据错误，请检查后填写"
    errorStatus.value = true
    setTimeout(function (){errorStatus.value = false},4000)
  }
  if(yesterdayLessGrass.value>=yesterdayGiveGrass.value){
    dataError.value = "昨天吃草数据错误，请检查后填写"
    errorStatus.value = true
    setTimeout(function (){errorStatus.value = false},4000)
  }
  if (morningLessSaltDrink.value >= morningGiveSaltWater.value) {
    dataError.value = "早上盐水数据错误，请检查后填写"
    errorStatus.value = true
    setTimeout(function (){errorStatus.value = false},4000)
  }
  if (morningLessCommonDrink.value >= morningGiveCommonWater.value) {
    dataError.value = "早上清水数据错误，请检查后填写"
    errorStatus.value = true
    setTimeout(function (){errorStatus.value = false},4000)
  }
  if (morningLessGrass.value >= morningGiveGrass.value) {
    dataError.value = "早上吃草数据错误，请检查后填写"
    errorStatus.value = true
    setTimeout(function (){errorStatus.value = false},4000)
  }



  output.value = "🌟羊驼" + time.value + "结汇报" + "\n" + "1. 白天备草" + morningGiveGrass.value + "克，剩余" + morningLessGrass.value + "克，吃了" +
      morningEatCount.value + "克\n2. 昨晚备草" + yesterdayGiveGrass.value + "克，剩余" + yesterdayLessGrass.value + "克，吃了" + yesterdayEatCount.value +
      "克\n3. 白天喂水" + morningGiveWater.value + "克，剩余" + morningLessDrink.value + "克\n" +
      "4. 昨晚喂水" + yesterdayGiveWater.value + "克，剩余" + yesterdayLessWater.value + "克\n" +
      "5. 昨晚喝水" + yesterdayDrinkCount.value + "克，白天喝水" + morningDrinkCount.value + "克\n" +
      "6. 反刍次数要求" + ruminationNeed.value + "次，反刍" + ruminationCount.value + "次\n" +
      "🌟总结：\n1. 吃草总量：" + allEatCount.value + "克\n" +
      "2. 饲料总量：" + feedEaten.value + "克\n" +
      "3. 喝水总量：" + allDrinkCount.value + "克\n" +
      "4. 反刍次数：" + ruminationCount.value + "次"

}

time.value = moment().format("MM月DD日");
</script>

<style lang="scss">
.outputButtons {
  padding: 1em;
  justify-content: center;
  display: flex;

  .outputButton {
    margin-right: 0.5em;
    margin-left: 0.5em;
  }
}

.title {
  display: flex;
  justify-content: center;
  font-size: 1.2em;
}

.outputWindow {
  padding-left: 0.5em;
  padding-right: 0.5em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  .outputInput {
    height: 19em;
    margin-bottom: 1em;
  }

  .tips {
    margin-bottom: 0.5em;
  }

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
      padding-left: 0.75em;
    }

    .input {
      width: 13em;
    }
  }
}
</style>