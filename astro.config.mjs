import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [react(),tailwind()],
  site: 'https://apportfolio.github.io',
  base: '/APportfolio', 

})
