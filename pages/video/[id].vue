<template>
    <Appheader :Num="String($route.params.id)"/>
    <h1>{{ $route.params.id }}</h1>
</template>



<script lang="ts" setup>
import Appheader from '@/components/Appheader.vue';

// 動態獲取路由id
const { params } = useRoute();
console.log("動態路由", params.id); // [id] 用 id  [abc]用abc
</script>

<style scoped></style>