import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Arcaea Offline',
  description: 'Arcaea Offline concepts',
  themeConfig: {
    logo: '/logo-icon.inkscape.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '简介', link: '/introduction' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
