<template>
  <a class="VPLink link link-with-icon" :href="linkHref">
    <i class="link-with-icon-icon">
      <component :is="linkEntry.icon" />
    </i>
    <component class="link-with-icon-text" :is="linkEntry.label" />
  </a>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed, h } from 'vue'

import type { DefinitionLinkEntry } from './links'
import links from './links'

const props = defineProps<{
  target: string
}>()

const linkEntry = computed<DefinitionLinkEntry>(() => {
  const link = links[props.target]

  if (link) {
    return link
  } else {
    return {
      label: h('span', `<! ${props.target} !>`),
    }
  }
})

const linkHref = computed(() => {
  if (linkEntry.value.href) {
    return withBase(linkEntry.value.href)
  } else {
    return null
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
