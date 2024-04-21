<template>
    <h1>首頁</h1>
    <van-button type="primary">主要按鈕</van-button>

    <!-- 頻道模塊 -->
    <van-tabs>
        <van-tab v-for="item in channelList.channels" :key="item.id" :title="item.name"></van-tab>
        <!-- {{channelList.channel}} -->
    </van-tabs>

    <NuxtLink class="" v-for="item in 20" :key="item" :to="'/video/0'">
        789
    </NuxtLink>



</template>



<script lang="ts" setup>
const { data: channelList, pending, error, refresh } = await useFetch('/api/channel', {
    method: "GET"
})
console.log(channelList.value.channels[0].id)
</script>

<style scoped>
/* lang="scss" */
/* // @import './assets/bass.scss' */
</style>