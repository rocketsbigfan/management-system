import { defineConfig } from 'vite';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';

function resolve(dir: string) {
  return path.join(__dirname, './', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: name => `antd/es/${name}/style`,
        },
      ],
    }),
  ],

  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: resolve('src') },
    ],
  },

  server: {
    open: true, // 是否自动打开浏览器
    proxy: {
      '/api/todos': {
        target: 'http://localhost:3364',
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    sourcemap: true,
    manifest: true,
  },
});
