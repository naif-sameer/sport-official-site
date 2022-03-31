import { defineConfig } from 'vite';

import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@fonts': resolve(__dirname, 'src', 'fonts'),
      '@images': resolve(__dirname, 'src', 'images'),
    },
  },
});
