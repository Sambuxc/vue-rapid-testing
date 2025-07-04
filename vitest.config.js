import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'happy-dom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: ['./src/test-setup.ts'],
      projects: [
        // https://vitest.dev/config/#environmentmatchglobs
        'tests/dom',
        {
          extends: true,
          test: {
            environment: 'jsdom'
          }
        }
      ]
    },
  }),
)
