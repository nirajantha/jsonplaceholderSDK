import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/App.tsx'),
      name: 'JSONSDK',
      fileName: (format) => `sdkLibrary.${format}.js`
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into the library
      external: ['axios'],
      output: {
        globals: {
          axios: 'axios'
        }
      }
    }
  }
});