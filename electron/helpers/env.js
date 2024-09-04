import dotenv from 'dotenv';
import { envFilePath } from './paths.js';

dotenv.config(
    {
        path: envFilePath
    }
);

// 对于这里的环境变量设置还有疑惑，需要进一步查看
export const electronStoreKey =
    process.env.VITE_APP_ELECTRON_STORE_KEY

export const discordClientId =
    process.env.VITE_APP_DISCORD_CLIENT_ID
