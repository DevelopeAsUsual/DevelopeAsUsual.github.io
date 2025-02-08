import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  base: "/DevelopeAsUsual.github.io",
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx']
  }
})
