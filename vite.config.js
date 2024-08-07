import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'dist', // Ensure this matches where you want your build output
    rollupOptions: {
      input: {
        main: 'index.html' // Ensure this path is correct
      }
    }
  }
});
