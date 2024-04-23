<template>
  <Appheader :Num="String($route.params.id)" />
  <h1>{{ $route.params.id }}</h1>
  123456789

  <van-barrage v-model="barrageList" :auto-play="false" ref="barrageRef">
    <video
      src="@/4b.mp4"
      controls
      poster="@/tt.jpg"
      class="videoStyle"
      @play="onplay"
      @pause="onpause"
    ></video>
    <!-- <iframe width="1250" height="703" src="https://www.youtube.com/embed/RJSMHRn0ejI" title="[禽獸朋友們] 悲傷的待業者生活" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
  </van-barrage>
</template>

<script lang="ts" setup>
import Appheader from "@/components/Appheader.vue";

// 動態獲取路由id
const { params } = useRoute();
console.log("動態路由", params.id); // [id] 用 id  [abc]用abc

const { data: details } = await useFetch(`/api/videoDetail/${params.id}`);
console.log(details.value);

const barrageList = [
  { id: 101, text: "123" },
  { id: 102, text: "456" },
  { id: 103, text: "789" },
];

const barrageRef = ref(); 
const onplay = ()=>{
    barrageRef.value?.play();
}
const onpause=()=>{
    barrageRef.value?.pause();
}
</script>

<style scoped>
.videoStyle {
  width: 500px;
}
</style>
