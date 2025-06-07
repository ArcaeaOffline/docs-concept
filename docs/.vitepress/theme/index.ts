import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './custom.css'
import EntityLink from '../../components/EntityLink.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('EntityLink', EntityLink)
  },
} satisfies Theme
