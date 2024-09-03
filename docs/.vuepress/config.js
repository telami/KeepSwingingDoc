import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  host: '0.0.0.0',
  title: 'KeepSwinging',
  description: 'KeepSwinging Docs',

  theme: defaultTheme({
    logo: '/images/logo.png',
    themePlugins: {
    },
    home: "/introduce.md",
    sidebar: [
      {
        text: 'Advanced',
        // collapsible: true,
        children: [
          '/advanced/architecture.md',
          '/advanced/plugin.md',
          '/advanced/theme.md',
        ],
      },
      {
        text: 'Cookbook',
        children: [
          '/advanced/cookbook/README.md',
          '/advanced/cookbook/usage-of-client-config.md',
          '/advanced/cookbook/adding-extra-pages.md',
          '/advanced/cookbook/making-a-theme-extendable.md',
          '/advanced/cookbook/passing-data-to-client-code.md',
          '/advanced/cookbook/markdown-and-vue-sfc.md',
          '/advanced/cookbook/resolving-routes.md',
        ],
      }
    ]
  }),

  bundler: viteBundler(),
})
