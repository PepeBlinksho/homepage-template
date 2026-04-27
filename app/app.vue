<script setup lang="ts">
import { siteConfig } from '~/config/site'

const route = useRoute()
// トップページはスナップスクロールのため AppFooter を非表示
const showFooter = computed(() => route.path !== '/')

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'ja',
  },
})

useSeoMeta({
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  ogImage: siteConfig.seo.ogImage,
  ogType: 'website',
})
</script>

<template>
  <UApp>
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter v-if="showFooter" />
  </UApp>
</template>
