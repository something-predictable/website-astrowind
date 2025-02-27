import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from 'astro-icon'

import astrowind from '@riddance/astrowind'

import {
    lazyImagesRehypePlugin,
    readingTimeRemarkPlugin,
    responsiveTablesRehypePlugin,
} from '@riddance/astrowind/utils/frontmatter.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    output: 'static',

    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        sitemap(),
        mdx(),
        icon({
            include: {
                tabler: ['*'],
                'flat-color-icons': [
                    'template',
                    'gallery',
                    'approval',
                    'document',
                    'currency-exchange',
                    'voice-presentation',
                    'business-contact',
                    'database',
                ],
            },
        }),

        compress({
            CSS: true,
            HTML: {
                'html-minifier-terser': {
                    removeAttributeQuotes: false,
                },
            },
            Image: false,
            JavaScript: true,
            SVG: false,
            Logger: 1,
        }),

        astrowind({
            config: './src/config.yaml',
        }),
    ],

    markdown: {
        remarkPlugins: [readingTimeRemarkPlugin],
        rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
    },

    vite: {
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './src'),
                '#astrowind:config': '\0#astrowind:config',
            },
        },
        ssr: {
            noExternal: ['@fontsource-variable/inter'],
        },
    },
})
