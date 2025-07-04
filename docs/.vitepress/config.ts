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
      { text: '数据交换模式', link: '/data-interchange-schemas/' },
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
      '/data-interchange-schemas/': [
        {
          text: '数据交换模式',
          link: '/data-interchange-schemas/',
          items: [
            {
              text: '版本 5',
              link: '/data-interchange-schemas/v5/',
              items: [
                { text: '曲包', link: '/data-interchange-schemas/v5/pack' },
                { text: '歌曲', link: '/data-interchange-schemas/v5/song' },
                {
                  text: '难度',
                  link: '/data-interchange-schemas/v5/difficulty',
                },
                {
                  text: '谱面信息',
                  link: '/data-interchange-schemas/v5/chart-info',
                },
                {
                  text: '游玩记录',
                  link: '/data-interchange-schemas/v5/play-result',
                },
                {
                  text: '本地化对象',
                  items: [
                    {
                      text: '曲包',
                      link: '/data-interchange-schemas/v5/pack-localization',
                    },
                    {
                      text: '歌曲',
                      link: '/data-interchange-schemas/v5/song-localization',
                    },
                    {
                      text: '难度',
                      link: '/data-interchange-schemas/v5/difficulty-localization',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/ArcaeaOffline' }],
  },
})
