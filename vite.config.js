import { defineConfig } from 'vite'
import optimizer from 'vite-plugin-optimizer'
import vue from '@vitejs/plugin-vue'
import inject from '@rollup/plugin-inject'
import { resolve as resolvePath} from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      inject({
          $: 'jQuery',
          jQuery: 'jquery'
      }),
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
