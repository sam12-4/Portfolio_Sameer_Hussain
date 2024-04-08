import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Portfolio_Sameer_Hussain",
  plugins: [react()],
assetsInclude : ['**/*.glb']
})
