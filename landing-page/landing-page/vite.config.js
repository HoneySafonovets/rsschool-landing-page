import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/rsschool-landing-page/landing-page/landing-page/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'styles/style.css';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    },
    sourcemap: true,
  }
});