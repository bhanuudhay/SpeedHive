import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures correct asset paths on Netlify
  build: {
    outDir: 'dist', // Netlify looks for this directory
  },
});
