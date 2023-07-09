import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import lightningcss from 'vite-plugin-lightningcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    lightningcss({
      browserslist: '>= 0.25%',
    })
  ],
  css: {
    modules: {
      hashPrefix: '[hash:8]',
      generateScopedName: '[hash:8]',
    },
  },

})
