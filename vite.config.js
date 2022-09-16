import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/rick-and-morty/',
  plugins: [react()]
})
