import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [UnoCSS()],
  css: {
    transformer: 'lightningcss', // change to postcss
  },
  build: {
    cssMinify: 'lightningcss',
  },
});
