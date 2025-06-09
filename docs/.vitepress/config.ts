import { defineConfig } from 'vitepress'
import vite from './vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: vite,

  title: 'Arcaea Offline',
  description: 'Arcaea Offline concepts',

  base: '/docs-concept',

  themeConfig: {
    logo: '/logo-icon.inkscape.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '简介', link: '/introduction/' },
      { text: '定义', link: '/definitions/' },
      { text: '数据交换格式', link: '/data-exchange-format/' },
    ],

    sidebar: {
      '/introduction': [],
      '/definitions/': [
        {
          text: '定义',
          link: '/definitions/',
          items: [
            { text: '曲包', link: '/definitions/pack' },
            { text: '歌曲', link: '/definitions/song' },
            { text: '难度', link: '/definitions/difficulty' },
            { text: '谱面信息', link: '/definitions/chart-info' },
            { text: '游玩记录', link: '/definitions/play-result' },
          ],
        },
        {
          text: '本地化对象',
          items: [
            { text: '曲包', link: '/definitions/pack-localization' },
            { text: '歌曲', link: '/definitions/song-localization' },
            { text: '难度', link: '/definitions/difficulty-localization' },
          ],
        },
      ],
      '/data-exchange-format/': [
        {
          text: '数据交换格式',
          link: '/data-exchange-format/',
          items: [{ text: '版本 5', link: '/data-exchange-format/v5/' }],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/ArcaeaOffline' }],
  },
})
