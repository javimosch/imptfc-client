// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import requireTransform from 'vite-plugin-require-transform';

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),requireTransform({})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
