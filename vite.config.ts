import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  define: {
    __IS_DEV__: JSON.stringify(true)
  },

  resolve: {
    alias: [
      {find: '@', replacement: '/src'}
    ]
  }
})
