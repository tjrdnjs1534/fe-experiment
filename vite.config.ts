import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      // `src` 디렉토리를 기준으로 각 경로 별칭 정의
      '@components': '/src/components',
      '@styles': '/src/styles',
    },
  },
})
