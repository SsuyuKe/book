import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  build: {
    minify: false,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          ui: ['antd', '@ant-design/icons'],
          utilities: ['axios', 'clsx', 'zustand'],
        },
      },
    },
  },
  server: {
    hmr: {
      protocol: 'ws', // WebSocket 协议，避免网络问题
      timeout: 30000, // 增大超时时间
    },
    watch: {
      usePolling: true, // 避免文件变动检测问题
      interval: 100,    // 设置轮询间隔
    },
    historyApiFallback: true, // 支持 SPA 路由
  },
})