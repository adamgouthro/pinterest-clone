import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensuring the fetch can happen
  server: {
    proxy: { 'api' : 'http/localhost:3000'},
  },
})
