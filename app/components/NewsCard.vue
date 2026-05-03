<script setup lang="ts">
import type { NewsItem } from '~/config/site'

defineProps<{
  item: NewsItem
  index?: number
}>()

const prefix = useRoutePrefix()

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <NuxtLink
    :to="`${prefix}/news/${item.id}`"
    class="group block"
  >
    <article
      class="h-full bg-stone-50 group-hover:bg-white group-hover:shadow-lg rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1 border border-transparent group-hover:border-stone-100"
    >
      <div class="flex items-center gap-3 mb-4">
        <time
          class="text-xs text-stone-400"
          :datetime="item.date"
        >
          {{ formatDate(item.date) }}
        </time>
        <UBadge
          :label="item.category"
          color="primary"
          variant="subtle"
          size="sm"
        />
      </div>
      <h3 class="font-medium text-stone-900 leading-snug line-clamp-2 group-hover:text-amber-700 transition-colors mb-3">
        {{ item.title }}
      </h3>
      <p class="text-sm text-stone-500 line-clamp-2 leading-relaxed">
        {{ item.body }}
      </p>
      <div class="mt-4 flex items-center gap-1 text-amber-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span>続きを読む</span>
        <UIcon
          name="i-heroicons-arrow-right"
          class="w-3 h-3"
        />
      </div>
    </article>
  </NuxtLink>
</template>
