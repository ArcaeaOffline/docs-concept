<template>
  <a class="VPLink link link-with-icon" :href="linkEntry.href">
    <i class="link-with-icon-icon">
      <component :is="linkEntry.icon" />
    </i>
    <span class="link-with-icon-text">{{ linkEntry.text }}</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import links from './entity-links'
import type { EntityLinkEntry } from './entity-links'

const props = defineProps<{
  target: string
}>()

const linkEntry = computed<EntityLinkEntry>(() => {
  const link = links[props.target]

  if (link) {
    return link
  } else {
    return {
      text: `<! ${props.target} !>`,
    }
  }
})
</script>

<style lang="css" scoped>
.link-with-icon {
  display: inline-block;
  text-wrap: nowrap;
}

.link-with-icon-text {
  display: inline-block;
  vertical-align: baseline;
}

.link-with-icon-icon {
  display: inline-block;
  vertical-align: middle;
  margin-inline-end: 0.2em;
}
</style>
