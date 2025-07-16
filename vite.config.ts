import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/alarcon/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
})