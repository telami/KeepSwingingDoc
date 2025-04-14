import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  host: '0.0.0.0',
  title: 'KeepSwinging',
  description: 'KeepSwinging Docs',

  theme: defaultTheme({
    logo: '/images/logo.png',
    themePlugins: {
    },
    lastUpdated: false,
    contributors: false,
    home: "/README.md",
    sidebar: [
      {
        text: 'FAQ',
        // collapsible: true,
        children: [
          '/faq/index.md',
        ],
      },
    ]
  }),

  bundler: viteBundler(),
})
