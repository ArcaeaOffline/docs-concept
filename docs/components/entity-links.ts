import type { Component } from 'vue'

import PackIcon from 'virtual:icons/ao/pack'
import SongIcon from 'virtual:icons/ao/song'
import RatingClassIcon from 'virtual:icons/ao/rating-class'

export interface EntityLinkEntry {
  href?: string
  text: string
  icon?: Component
}

export default {
  pack: {
    href: '/definitions/pack',
    text: '曲包',
    icon: PackIcon,
  },
  song: {
    href: '/definitions/song',
    text: '歌曲',
    icon: SongIcon,
  },
  difficulty: {
    href: '/definitions/difficulty',
    text: '难度',
    icon: RatingClassIcon,
  },
} satisfies Record<string, EntityLinkEntry>
