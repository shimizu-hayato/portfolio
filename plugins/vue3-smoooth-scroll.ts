import { defineNuxtPlugin } from "#app";
import VueSmoothScroll from "vue3-smooth-scroll";

export default defineNuxtPlugin((nuxtApp) => {
    const config = {
        duration: 500, // アニメーションにかかる時間(ms)
        offset: 0, // スクロールするオフセット(マイナスも可)
    }
    nuxtApp.vueApp.use(VueSmoothScroll)
});