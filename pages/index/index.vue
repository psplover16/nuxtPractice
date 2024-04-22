<template>
  <h1>首頁</h1>
  <van-button type="primary">主要按鈕</van-button>

  <!-- 頻道模塊 -->
  <van-tabs>
    <van-tab v-for="item in channelList?.channels" :key="item.id" :title="item.name"></van-tab>
    <!-- {{channelList.channel}} -->
  </van-tabs>

  <!-- 視頻列表 -->
  <div class="vancard">
    <van-list v-model:loading="loading" :finished="finished" finished-text="沒有更多了" @load="onload">
      <NuxtLink class="" v-for="item in list" :key="item.id" :to="`/video/${item.id}`">
        <div style="height: 200px">
          {{ item.id }}
        </div>
      </NuxtLink>
    </van-list>
  </div>
</template>

<script lang="ts" setup>
import type { VideoItem } from "@/types/video"

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
const list = ref<VideoItem[]>([]);  // list 設定為 一個 VideoItem 格式的陣列，起始值為[]
// const list = ref<any[]>([]);  
// const list = ref([]);

// 是否讀取資料中
const loading = ref(false);
// 是否結束撈取資料
const finished = ref(false);

// 目前第幾頁? 及一頁有幾筆資料
let page = 1;
let pageSize = 5;

// 模擬撈取資料時間
const simulationAwait = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, 20);
  })
}

const onload = async () => {
  // 開啟讀取狀態
  loading.value = true;
  console.log("滾到底部");
  // 等待時間撈資料(模擬)
  await simulationAwait();
  // 撈到的資料丟到渲染的資料
  const data = videoList.value?.video.slice((page - 1) * pageSize, page * pageSize) as VideoItem[];
  // const data = videoList.value?.video.slice((page - 1) * pageSize, page * pageSize) as any[];

  list.value.push(...data); // 展運算符
  page++;
  // 讀取狀態關閉
  loading.value = false;
  // 若server的資料長度 == 若渲染的資料長度，表示結束撈取資料
  if (videoList.value?.video.length == list.value.length) {
    finished.value = true;
  }
};
// 嫌資料太大，不容易渲染，進而使用onload，但onload不利於SEO，因為撈不到資料。
// 所以初始化加載 - 一進頁面主動請求前幾筆資料，方便SEO 抓取數據 (至少有前幾筆)
onload();
</script>

<style scoped>
/* lang="scss" */
/* // @import './assets/bass.scss' */
.vancard {
  height: 600px;
  overflow: auto;
}
</style>
