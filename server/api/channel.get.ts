// get /api/channel
import channels from '@/database/channel'

// 創建API管線，定義接口
export default defineEventHandler(() => {
    return {
        channels
        // status:200,
        // body:{

        // }
    }
})