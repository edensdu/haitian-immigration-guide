import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'components': [
            './src/components/StatusInfo',
            './src/components/Timeline',
            './src/components/Resources',
            './src/components/DocumentChecklist',
            './src/components/ImportantDates',
            './src/components/FormsFinder',
            './src/components/CostEstimator',
            './src/components/FAQ',
            './src/components/OfficeFinder'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})

