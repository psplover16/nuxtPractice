// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:true,  // 是否開啟SSR渲染，預設是true
  modules:['@vant/nuxt'] // 配置應用模組
})
