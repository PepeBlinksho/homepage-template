<script setup lang="ts">
import { siteConfig } from '~/config/site'

const route = useRoute()
const id = route.params.id as string

const article = computed(() => siteConfig.news.find(n => n.id === id))

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: '記事が見つかりません' })
}

const articleTitle = article.value?.title ?? ''
const articleDescription = article.value?.body.slice(0, 100) ?? ''

useSeoMeta({
  title: `${articleTitle} | ${siteConfig.name}`,
  description: articleDescription,
  ogTitle: `${articleTitle} | ${siteConfig.name}`,
  ogDescription: articleDescription,
  ogImage: siteConfig.seo.ogImage,
  ogType: 'article',
})
useCanonical()

if (article.value) {
  useArticleJsonLd(article.value)
}

const { el, revealed } = useReveal()

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <div class="pt-16 min-h-screen bg-white">
    <!-- ページヘッダー -->
    <div class="relative bg-stone-900 py-24 overflow-hidden">
      <div class="grain-overlay opacity-[0.04]" />
      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <p class="text-xs tracking-[0.5em] uppercase text-amber-400 mb-3">
          News
        </p>
        <h1 class="font-serif text-5xl md:text-6xl font-semibold text-white">
          お知らせ
        </h1>
        <div class="w-12 h-0.5 bg-amber-500 mt-4" />
      </div>
    </div>

    <!-- 記事コンテンツ -->
    <div
      v-if="article"
      ref="el"
      class="max-w-2xl mx-auto px-4 sm:px-6 py-20"
    >
      <div
        class="transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <!-- メタ情報 -->
        <div class="flex items-center gap-3 mb-6">
          <time
            class="text-sm text-stone-400"
            :datetime="article.date"
          >
            {{ formatDate(article.date) }}
          </time>
          <UBadge
            :label="article.category"
            color="primary"
            variant="subtle"
          />
        </div>

        <!-- タイトル -->
        <h2 class="font-serif text-2xl md:text-3xl font-semibold text-stone-900 mb-10 leading-snug">
          {{ article.title }}
        </h2>

        <!-- 区切り線 -->
        <div class="w-full h-px bg-gradient-to-r from-amber-400 to-transparent mb-10" />

        <!-- 本文 -->
        <div class="text-stone-700 leading-loose whitespace-pre-wrap text-base">
          {{ article.body }}
        </div>

        <!-- 一覧に戻る -->
        <div class="mt-14 pt-8 border-t border-stone-100">
          <UButton
            to="/news"
            variant="ghost"
            color="neutral"
            icon="i-heroicons-arrow-left"
            class="text-stone-500 hover:text-stone-900"
          >
            一覧に戻る
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
