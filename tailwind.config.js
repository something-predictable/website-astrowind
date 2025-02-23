import tailwindConfig from '@riddance/astrowind/tailwind/config.js';

export default {
  ...tailwindConfig,
  content: [
    './src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@riddance/astrowind/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}',
  ],
};
