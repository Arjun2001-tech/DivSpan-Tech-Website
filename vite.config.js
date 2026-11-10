import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

function transformJsxInJs() {
  return {
    name: 'transform-jsx-in-js',
    enforce: 'pre',

    async transform(code, id) {
      const filePath = id.split('?')[0];

      if (!filePath.includes('/src/') || !filePath.endsWith('.js')) {
        return null;
      }

      return await transformWithOxc(code, id, {
        lang: 'jsx'
      });
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    transformJsxInJs()
  ],

  optimizeDeps: {
    noDiscovery: true,
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'react-router-dom',
      'lucide-react'
    ]
  }
});