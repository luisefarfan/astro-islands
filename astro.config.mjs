// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid',

  experimental: {
    serverIslands: true
  },

  adapter: node({
    mode: 'standalone'
  })
});
