<template>
  <div>
    <!-- 路由頁面 -->
    <!-- 最大緩存10級頁面 -->
    <NuxtPage :keepalive="{ max: 10 }" />
  </div>
</template>


<script setup lang="ts">
useSeoMeta({
  title: "BIBILI", // 搜索標題
  description: "bibili is good video web", //敘述
  keywords: "B站,bilibili" // 這個關鍵字也能搜索 ，但全重較低
})
</script>

<style>
:root {
  --van-primary-color: black;
}
</style>