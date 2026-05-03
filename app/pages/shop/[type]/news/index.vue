<script setup lang="ts">
const siteConfig = useShopConfig()
const prefix = useRoutePrefix()

useSeoMeta({
  title: `お知らせ | ${siteConfig.value.name}`,
  description: `${siteConfig.value.name}からのお知らせ一覧です。`,
  ogTitle: `お知らせ | ${siteConfig.value.name}`,
  ogDescription: `${siteConfig.value.name}からのお知らせ一覧です。`,
  ogImage: siteConfig.value.seo.ogImage,
  ogType: 'website',
})

const { el, revealed } = useReveal()

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <div class="pt-16 min-h-screen bg-white">
    <div class="relative bg-stone-900 py-24 overflow-hidden">
      <div class="grain-overlay opacity-[0.04]" />
      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <p class="text-xs tracking-[0.5em] uppercase text-amber-400 mb-3">News</p>
        <h1 class="font-serif text-5xl md:text-6xl font-semibold text-white">お知らせ</h1>
        <div class="w-12 h-0.5 bg-amber-500 mt-4" />
      </div>
    </div>

    <div ref="el" class="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <div v-if="siteConfig.news.length === 0" class="text-center py-20 text-stone-400">
        <UIcon name="i-heroicons-newspaper" class="w-12 h-12 mx-auto mb-4 opacity-40" />
        <p class="text-sm">現在お知らせはありません</p>
      </div>

      <ul v-else class="space-y-0">
        <li
          v-for="(item, i) in siteConfig.news"
          :key="item.id"
          class="transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <NuxtLink
            :to="`${prefix}/news/${item.id}`"
            class="flex items-start sm:items-center gap-4 py-6 border-b border-stone-100 hover:bg-stone-50 -mx-4 px-4 rounded-xl transition-colors group"
          >
            <time class="text-sm text-stone-400 w-28 shrink-0 pt-0.5" :datetime="item.date">
              {{ formatDate(item.date) }}
            </time>
            <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1 min-w-0">
              <UBadge :label="item.category" color="primary" variant="subtle" size="sm" class="shrink-0 self-start sm:self-auto" />
              <span class="text-stone-800 font-medium group-hover:text-amber-700 transition-colors line-clamp-1">{{ item.title }}</span>
            </div>
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 text-stone-300 group-hover:text-amber-500 transition-colors shrink-0 mt-0.5 sm:mt-0" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
