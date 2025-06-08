import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './custom.css'
import DefinitionLink from '../../components/definitionlink/DefinitionLink.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DefinitionLink', DefinitionLink)
  },
} satisfies Theme
