import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '/': resolve(__dirname, ''),
      src: resolve(root, ''),
      types: resolve(root, 'types'),
      assets: resolve(root, 'assets'),
      components: resolve(root, 'components'),
      constants: resolve(root, 'constants'),
      pages: resolve(root, 'pages'),
      utils: resolve(root, 'utils'),
    },
  },
  plugins: [tsconfigPaths(), react()],
});
