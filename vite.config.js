import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default base for GitHub Pages (/soundescape/), override to "/" on Render via BASE_PATH or RENDER env
const base = process.env.BASE_PATH || (process.env.RENDER ? '/' : '/soundescape/');

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 10000,
    allowedHosts: [
      'soundescape.onrender.com',
      '.onrender.com'
    ]
  }
})
