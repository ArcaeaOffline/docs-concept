import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Arcaea Offline',
  description: 'Arcaea Offline concepts',
  themeConfig: {
    logo: '/logo-icon.inkscape.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '简介', link: '/introduction/' },
      { text: '数据交换格式', link: '/data-exchange-format/' },
    ],

    sidebar: {
      '/introduction': [],
      '/data-exchange-format/': [
        {
          text: '数据交换格式',
          link: '/data-exchange-format/',
          items: [
            {
              text: '版本 2',
              items: [{ text: '分数', link: '/data-exchange-format/v2/score' }],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ArcaeaOffline' },
    ],
  },
})
