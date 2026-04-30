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
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    <!-- スキップナビゲーション（キーボード・スクリーンリーダー向け） -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-amber-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium focus:shadow-lg"
    >
      メインコンテンツへスキップ
    </a>

    <AppHeader />
    <main id="main-content">
      <NuxtPage />
    </main>
    <AppFooter v-if="showFooter" />
  </UApp>
</template>
