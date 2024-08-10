import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8097,
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setupTests.js",
  },
});
