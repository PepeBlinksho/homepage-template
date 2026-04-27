<script setup lang="ts">
import { siteConfig } from '~/config/site'

const { el, revealed } = useReveal()
const latestNews = computed(() => siteConfig.news.slice(0, 3))
</script>

<template>
  <section
    ref="el"
    class="py-14 md:py-16 bg-stone-50 overflow-hidden flex flex-col justify-center h-full"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
        <!-- セクションヘッダー -->
        <div
          class="transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <SectionHeader
            label="News"
            title="お知らせ"
          />
        </div>
        <!-- もっと見るリンク -->
        <div
          class="transition-all duration-700 pb-2"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          style="transition-delay: 200ms"
        >
          <UButton
            to="/news"
            variant="ghost"
            color="neutral"
            trailing-icon="i-heroicons-arrow-right"
            class="text-stone-500 hover:text-stone-900"
          >
            すべて見る
          </UButton>
        </div>
      </div>

      <!-- ニュースカード一覧 -->
      <div class="grid md:grid-cols-3 gap-5">
        <div
          v-for="(item, i) in latestNews"
          :key="item.id"
          class="transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
          :style="{ transitionDelay: `${(i + 1) * 100}ms` }"
        >
          <NewsCard
            :item="item"
            :index="i"
          />
        </div>
      </div>
    </div>
  </section>
</template>
