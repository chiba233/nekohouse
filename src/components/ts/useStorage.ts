import {useStorage} from "@vueuse/core";
import moment from "moment/moment";
import 'moment/dist/locale/en-au.js';
import 'moment/dist/locale/zh-cn.js';
import type {Ref} from "vue";
import {ref} from "vue";

export const password: Ref<string> = useStorage("inputPassWord", "")
export const ruminationNeed: Ref<number> = useStorage("setRuminationNeed", 0)
export const ruminationCount: Ref<number> = useStorage("setRuminationCount", 0)

export const morningLessGrass :Ref<number> = useStorage("inputMorningLessGrass", 0)
export const morningGiveGrass:Ref<number> = useStorage("inputMorningGiveGrass", 0)
export  const morningGiveWater :Ref<number> = useStorage("inputMorningGiveWater", 0)
export  const morningLessDrink :Ref<number> = useStorage("inputMorningLessWater", 0)
export const yesterdayGiveGrass :Ref<number> =useStorage("inputYesterdayGiveGrass", 0)
export const yesterdayLessGrass :Ref<number> =useStorage("inputYesterdayLessGrass", 0)
export const yesterdayGiveWater:Ref<number> = useStorage("inputYesterdayGiveWater", 0)
export const yesterdayLessWater :Ref<number> =useStorage("inputYesterdayLessWater", 0)

