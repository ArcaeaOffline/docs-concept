import { VPBadge } from 'vitepress/theme'
import type { Component, VNode } from 'vue'
import { h } from 'vue'

import LocalizationIcon from 'virtual:icons/ao/localization'
import PackIcon from 'virtual:icons/ao/pack'
import RatingClassIcon from 'virtual:icons/ao/rating-class'
import SongIcon from 'virtual:icons/ao/song'

export interface DefinitionLinkEntry {
  href?: string
  label: VNode
  icon?: Component
}

export default {
  pack: {
    href: '/definitions/pack',
    label: h('span', ['曲包']),
    icon: PackIcon,
  },
  'pack-localization': {
    href: '/definitions/pack-localization',
    label: h('span', ['曲包', h(VPBadge, '本地化')]),
    icon: LocalizationIcon,
  },
  song: {
    href: '/definitions/song',
    label: h('span', '歌曲'),
    icon: SongIcon,
  },
  'song-localization': {
    href: '/definitions/song-localization',
    label: h('span', ['歌曲', h(VPBadge, '本地化')]),
    icon: LocalizationIcon,
  },
  difficulty: {
    href: '/definitions/difficulty',
    label: h('span', '难度'),
    icon: RatingClassIcon,
  },
  'difficulty-localization': {
    href: '/definitions/difficulty-localization',
    label: h('span', ['难度', h(VPBadge, '本地化')]),
    icon: LocalizationIcon,
  },
  'chart-info': {
    href: '/definitions/chart-info',
    label: h('span', '谱面信息'),
  },
  'play-result': {
    href: '/definitions/play-result',
    label: h('span', '游玩记录'),
  },
} satisfies Record<string, DefinitionLinkEntry>
