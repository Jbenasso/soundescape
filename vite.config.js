import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path: default "/"; set BASE_PATH=/soundescape/ when building for GitHub Pages
const base = process.env.BASE_PATH || '/';

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
