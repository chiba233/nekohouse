import {useStorage} from "@vueuse/core";
import 'moment/dist/locale/en-au.js';
import 'moment/dist/locale/zh-cn.js';
import type {Ref} from "vue";
import passwordSecure from "@/info/common.json"

const passwordSecureNum: number = 1138198238 * 3 - 40 + 29131831 * 0.5 - passwordSecure.passwordSecureKey
const passwordSecureString: string = passwordSecureNum.toString()
const defaultPassword: string = passwordSecureNum.toString() + passwordSecure.password + passwordSecureString + passwordSecure.password
export const testPassword = (inputPassword: string) => {
    const userInput: string = passwordSecureNum.toString() + inputPassword + passwordSecureString + inputPassword
    if (userInput === defaultPassword) {
        passwordIsTrue.value = true
    }
    if (userInput !== defaultPassword) {
        loginFailedStatus.value = true
        setTimeout(function () {
            loginFailedStatus.value = false
        }, 2000)
    }

}
//export const setPage = (selectPageNum: number) => {
//    pageSelect.value = selectPageNum
 //   console.log(pageSelect.value)
//}

//export const pageSelect: Ref<number> = useStorage("setPageSelect", 0)
export const loginFailedStatus: Ref<boolean> = useStorage("isLoginFailed", false)

export const passwordIsTrue: Ref<boolean> = useStorage("isPasswordIsTrue", false)
export const password: Ref<string> = useStorage("inputPassWord", "")
export const ruminationNeed: Ref<number> = useStorage("setRuminationNeed", 0)
export const ruminationCount: Ref<number> = useStorage("setRuminationCount", 0)

export const morningLessGrass: Ref<number> = useStorage("inputMorningLessGrass", 0)
export const morningGiveGrass: Ref<number> = useStorage("inputMorningGiveGrass", 0)
export const morningGiveSaltWater: Ref<number> = useStorage("inputMorningGiveSaltWater", 0)
export const morningGiveCommonWater: Ref<number> = useStorage("inputMorningGiveCommonWater", 0)
export const morningLessCommonDrink: Ref<number> = useStorage("inputMorningLessCommonDrink", 0)
export const morningLessSaltDrink: Ref<number> = useStorage("inputMorningLessSaltDrink", 0)
export const yesterdayGiveGrass: Ref<number> = useStorage("inputYesterdayGiveGrass", 0)
export const yesterdayLessGrass: Ref<number> = useStorage("inputYesterdayLessGrass", 0)
export const yesterdayLessCommonDrink: Ref<number> = useStorage("inputYesterdayLessCommonDrink", 0)
export const yesterdayLessSaltDrink: Ref<number> = useStorage("inputYesterdayLessSaltDrink", 0)
export const yesterdayGiveCommonDrink: Ref<number> = useStorage("inputYesterdayGiveCommonDrink", 0)
export const yesterdayGiveSaltDrink: Ref<number> = useStorage("inputYesterdayGiveSaltDrink", 0)
