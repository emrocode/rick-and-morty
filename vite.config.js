import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://emrocode.github.io/rick-and-morty/',
  plugins: [react()]
})
