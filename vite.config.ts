import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://havenconsultants.com.np'
    }),
  ],
  build: {
    minify: 'esbuild', // Explicitly ensure minification is active
    target: 'es2020',  // Outputs modern, smaller JS footprints
    sourcemap: false,  // Disables source maps to shrink upload sizes
  },
  esbuild: {
    include: /\.(ts|tsx|js|jsx)$/,
    exclude: /node_modules/,
  },
})
