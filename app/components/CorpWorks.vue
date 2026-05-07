<script setup lang="ts">
const cfg = useCorpConfig()
const { el, revealed } = useReveal()

const categories = computed(() => {
  const cats = ['すべて', ...new Set(cfg.value.works.map(w => w.category))]
  return cats
})

const activeCategory = ref('すべて')

const filteredWorks = computed(() =>
  activeCategory.value === 'すべて'
    ? cfg.value.works
    : cfg.value.works.filter(w => w.category === activeCategory.value),
)

const categoryColors: Record<string, string> = {
  '外壁塗装': 'bg-sky-100 text-sky-700',
  '屋根塗装': 'bg-slate-100 text-slate-700',
  '内装塗装': 'bg-indigo-100 text-indigo-700',
  '防水工事': 'bg-teal-100 text-teal-700',
}

function getCategoryColor(cat: string) {
  return categoryColors[cat] ?? 'bg-slate-100 text-slate-600'
}
</script>

<template>
  <section
    id="works"
    ref="el"
    class="py-20 md:py-24 bg-white"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- ヘッダー -->
      <div
        class="mb-10 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="text-xs tracking-[0.5em] uppercase text-sky-600 font-medium mb-3">Works</p>
        <h2 class="font-serif text-4xl md:text-5xl font-semibold text-slate-900 mb-4">施工実績</h2>
        <div class="w-10 h-0.5 bg-sky-500" />
      </div>

      <!-- カテゴリフィルター -->
      <div
        class="flex flex-wrap gap-2 mb-10 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        style="transition-delay: 100ms"
      >
        <button
          v-for="cat in categories"
          :key="cat"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
          :class="activeCategory === cat
            ? 'bg-sky-600 text-white shadow-md shadow-sky-200'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- 実績グリッド -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(work, i) in filteredWorks"
          :key="work.title"
          class="bg-slate-50 rounded-2xl overflow-hidden card-lift border border-slate-100 transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${(i + 2) * 80}ms` }"
        >
          <!-- 画像エリア（写真なしの場合はプレースホルダー） -->
          <div class="relative h-44 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center overflow-hidden">
            <NuxtImg
              v-if="work.image"
              :src="work.image"
              :alt="work.title"
              class="w-full h-full object-cover"
              format="webp"
              quality="75"
            />
            <div v-else class="flex flex-col items-center gap-2 text-slate-400">
              <UIcon name="i-heroicons-photo" class="w-10 h-10" />
              <span class="text-xs font-medium tracking-wide">施工写真</span>
            </div>
            <!-- カテゴリバッジ -->
            <span
              class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
              :class="getCategoryColor(work.category)"
            >
              {{ work.category }}
            </span>
          </div>

          <!-- テキスト -->
          <div class="p-6">
            <div class="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
              <UIcon name="i-heroicons-map-pin" class="w-3.5 h-3.5" />
              {{ work.location }}
            </div>
            <h3 class="font-semibold text-slate-900 mb-2 leading-snug">{{ work.title }}</h3>
            <p class="text-sm text-slate-500 leading-relaxed">{{ work.description }}</p>
          </div>
        </div>
      </div>

      <!-- 実績なしメッセージ -->
      <div
        v-if="filteredWorks.length === 0"
        class="text-center py-16 text-slate-400"
      >
        <UIcon name="i-heroicons-photo" class="w-12 h-12 mx-auto mb-3 opacity-50" />
        <p class="text-sm">該当する施工実績がありません</p>
      </div>
    </div>
  </section>
</template>
