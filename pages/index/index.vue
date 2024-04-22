<template>
  <h1>首頁</h1>
  <van-button type="primary">主要按鈕</van-button>

  <!-- 頻道模塊 -->
  <van-tabs>
    <van-tab
      v-for="item in channelList.channels"
      :key="item.id"
      :title="item.name"
    ></van-tab>
    <!-- {{channelList.channel}} -->
  </van-tabs>

  <!-- 視頻列表 -->
  <div class="vancard">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="沒有更多了"
      @load="onload"
    >
      <NuxtLink
        class=""
        v-for="item in videoList.video"
        :key="item.id"
        :to="`https://chateverywhere.app/zh/${item.name}`"
      >
        <div style="height: 200px">
          {{ item.id }}
        </div>
      </NuxtLink>
    </van-list>
  </div>
</template>

<script lang="ts" setup>
const {
  data: channelList,
  pending,
  error,
  refresh,
} = await useFetch("/api/channel", {
  method: "GET",
});
// console.log(channelList.value.channels[0].id)

const {
  data: videoList,
  pending: videoPending,
  error: videoError,
  refresh: videoRefresh,
} = await useFetch("/api/video", {
  method: "GET",
});

//
const list = ref<any[]>([]);
const loading = ref(false);
const finished = ref(false);

let page=1;
let pageSize=5;

const onload = () => {
  console.log("滾到底部");
  const data = videoList.value?.video.slice((page-1)*pageSize,page*pageSize);
  list.value.push(...data); // 展運算符
};
</script>

<style scoped>
/* lang="scss" */
/* // @import './assets/bass.scss' */
.vancard {
  height: 600px;
  overflow: auto;
}
</style>
