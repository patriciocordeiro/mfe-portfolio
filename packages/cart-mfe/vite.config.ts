import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        // This exposes the component at the path 'cart/Cart'
        './Cart': './src/App.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  // Recommended build settings for federation
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  // Lock the dev server to a specific port
  server: {
    port: 5001,
  },
  // Also lock the preview server for consistency
  preview: {
    port: 5001,
  },
});
