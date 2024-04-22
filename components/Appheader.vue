<template>
    <header>
        <!-- {{ item.id }} -->
        {{ Num }}
        <button @click="$router.back()">返回上一頁</button>
    </header>
</template>



<script setup lang="ts">
// import { defineProps } from 'vue';
// import type { VideoItem } from '@/types/video';
// defineProps<{
//     item: VideoItem
// }>();

defineProps<
    {
        Num: String
    }
>();
</script>


<style scoped></style>