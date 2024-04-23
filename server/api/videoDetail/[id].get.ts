import video from "@/database/video";

export default defineEventHandler((event) => {
    const {id} = event.context.params || {};  // event.context  事件相關的訊息 當為null/undefined/false 回傳一個空json方便後續解構
    // console.log("ZZZZZZZZZZZZ",event.context);
    return video.find((v)=>{

       return v.id == Number(id);
    });
})