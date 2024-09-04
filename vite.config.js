import { defineConfig } from 'vite'
import optimizer from 'vite-plugin-optimizer'
import vue from '@vitejs/plugin-vue'
import { resolve as resolvePath} from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      optimizer({
      electron: `const { ipcRenderer } = require('electron'); export { ipcRenderer };`
    }),
  ],
  resolve: {
    alias: {
      '@': resolvePath(__dirname, './src')
    }
  },
  server: {
    port: 3000
  }
})
