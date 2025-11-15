import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://54.158.13.94:5050',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://54.158.13.94:5050',
        changeOrigin: true,
      },
    },
  },
})
