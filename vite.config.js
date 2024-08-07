import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Change to 3000 if using the default port
    host: '0.0.0.0'
  }
});
