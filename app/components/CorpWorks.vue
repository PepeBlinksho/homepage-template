<script setup lang="ts">
const cfg = useCorpConfig()
const { el, revealed } = useReveal()

const categories = computed(() => ['すべて', ...new Set(cfg.value.works.map(w => w.category))])
const activeCategory = ref('すべて')
const filteredWorks = computed(() =>
  activeCategory.value === 'すべて'
    ? cfg.value.works
    : cfg.value.works.filter(w => w.category === activeCategory.value),
)

const categoryColors: Record<string, string> = {
  外壁塗装: 'bg-sky-100 text-sky-700 border-sky-200',
  屋根塗装: 'bg-slate-100 text-slate-700 border-slate-200',
  内装塗装: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  防水工事: 'bg-teal-100 text-teal-700 border-teal-200',
}
function getCategoryColor(cat: string) {
  return categoryColors[cat] ?? 'bg-slate-100 text-slate-600 border-slate-200'
}
</script>

<template>
  <section
    id="works"
    ref="el"
    class="py-24 md:py-32 bg-slate-950 relative overflow-hidden"
  >
    <!-- 背景グリッド -->
    <div
      class="absolute inset-0 opacity-[0.03]"
      style="background-image: linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px); background-size: 72px 72px;"
    />

    <div class="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
      <!-- ヘッダー -->
      <div
        class="mb-12 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="flex items-center gap-4 mb-5">
          <div class="w-8 h-px bg-sky-500" />
          <span class="text-xs tracking-[0.4em] uppercase text-sky-400 font-medium">Works</span>
        </div>
        <h2 class="font-serif text-5xl md:text-6xl font-bold text-white leading-tight">
          施工実績
        </h2>
      </div>

      <!-- カテゴリフィルター -->
      <div
        class="flex flex-wrap gap-2 mb-12 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        style="transition-delay: 100ms"
      >
        <button
          v-for="cat in categories"
          :key="cat"
          class="px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200"
          :class="activeCategory === cat
            ? 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-900/30'
            : 'bg-transparent text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white'"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- 実績グリッド -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(work, i) in filteredWorks"
          :key="work.title"
          class="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/40 transition-all duration-400 cursor-default"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${(i + 2) * 70}ms`, transitionDuration: '600ms' }"
        >
          <!-- 画像エリア -->
          <div class="relative h-52 bg-slate-900 overflow-hidden">
            <NuxtImg
              v-if="work.image"
              :src="work.image"
              :alt="work.title"
              class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              format="webp"
              quality="75"
            />
            <!-- 写真なし時のプレースホルダー -->
            <div
              v-else
              class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900"
            >
              <div class="text-center">
                <UIcon
                  name="i-heroicons-photo"
                  class="w-10 h-10 text-slate-700 mx-auto mb-2"
                />
                <span class="text-xs text-slate-700 font-medium tracking-wide">施工写真</span>
              </div>
            </div>

            <!-- カテゴリバッジ -->
            <span
              class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm"
              :class="getCategoryColor(work.category)"
            >
              {{ work.category }}
            </span>

            <!-- ホバーオーバーレイ -->
            <div class="absolute inset-0 bg-sky-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p class="text-sm text-white/80 px-6 text-center leading-relaxed">
                {{ work.description }}
              </p>
            </div>
          </div>

          <!-- テキスト -->
          <div class="bg-slate-900 px-6 py-5">
            <div class="flex items-center gap-1.5 text-xs text-slate-600 mb-2">
              <UIcon
                name="i-heroicons-map-pin"
                class="w-3.5 h-3.5"
              />
              {{ work.location }}
            </div>
            <h3 class="font-semibold text-white leading-snug text-sm">
              {{ work.title }}
            </h3>
          </div>
        </div>
      </div>

      <div
        v-if="filteredWorks.length === 0"
        class="text-center py-20 text-slate-600"
      >
        <p class="text-sm">
          該当する施工実績がありません
        </p>
      </div>
    </div>
  </section>
</template>
