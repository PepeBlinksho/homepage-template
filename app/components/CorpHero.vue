<script setup lang="ts">
const cfg = useCorpConfig()
const prefix = useRoutePrefix()

const mounted = ref(false)
const statsVisible = ref(false)
const heroRef = ref<HTMLElement | null>(null)
const imageError = ref(false)

const { scrollY } = useSharedScroll()
const bgY = ref(0)
const isVisible = ref(true)
let io: IntersectionObserver | null = null

watch(scrollY, (y) => { if (isVisible.value) bgY.value = -y * 0.25 })

// カウントアップアニメーション
function useCounter(target: number, duration = 1800) {
  const count = ref(0)
  function start() {
    const startTime = Date.now()
    function step() {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      count.value = Math.floor(target * eased)
      if (progress < 1) requestAnimationFrame(step)
      else count.value = target
    }
    requestAnimationFrame(step)
  }
  return { count, start }
}

const defaultStats = [
  { value: 500, suffix: '件+', label: '累計施工実績' },
  { value: 20, suffix: '年', label: '創業' },
  { value: 10, suffix: '年', label: '施工保証' },
]
const statsConfig = computed(() =>
  cfg.value.stats?.length
    ? cfg.value.stats
    : defaultStats,
)

const stat1 = useCounter(statsConfig.value[0]?.value ?? 0)
const stat2 = useCounter(statsConfig.value[1]?.value ?? 0)
const stat3 = useCounter(statsConfig.value[2]?.value ?? 0)

onMounted(() => {
  mounted.value = true
  if (heroRef.value) {
    io = new IntersectionObserver(
      (entries) => { isVisible.value = entries[0]?.isIntersecting ?? true },
      { threshold: 0 },
    )
    io.observe(heroRef.value)
  }
  setTimeout(() => {
    statsVisible.value = true
    stat1.start()
    stat2.start()
    stat3.start()
  }, 800)
})
onUnmounted(() => { io?.disconnect(); io = null })
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex items-center bg-slate-950 overflow-hidden"
  >
    <!-- グリッドパターン背景 -->
    <div
      class="absolute inset-0 opacity-[0.04]"
      style="background-image: linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px); background-size: 72px 72px;"
    />

    <!-- ヒーロー画像オーバーレイ -->
    <div
      v-if="cfg.images.hero && !imageError"
      class="absolute inset-0 opacity-20"
      :style="{ transform: `translateY(${bgY}px) scale(1.1)` }"
    >
      <NuxtImg
        :src="cfg.images.hero"
        alt=""
        class="w-full h-full object-cover"
        format="webp"
        quality="70"
        fetchpriority="high"
        preload
        @error="imageError = true"
      />
    </div>

    <!-- 左アクセントライン -->
    <div
      class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-sky-500 to-transparent transition-opacity duration-1000"
      :class="mounted ? 'opacity-100' : 'opacity-0'"
    />

    <!-- 右上デコレーション -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-600/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
    <div class="absolute bottom-0 right-20 w-72 h-72 rounded-full bg-sky-500/5 translate-y-1/3 pointer-events-none" />

    <!-- メインコンテンツ -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 py-24 lg:py-32">
      <div class="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
        <!-- 左: テキスト (3/5) -->
        <div class="lg:col-span-3">
          <!-- ラベル -->
          <div
            class="flex items-center gap-3 mb-8 transition-all duration-700"
            :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            style="transition-delay: 100ms"
          >
            <div class="w-8 h-px bg-sky-500" />
            <span class="text-xs tracking-[0.4em] uppercase text-sky-400 font-medium">{{ cfg.nameEn }}</span>
          </div>

          <!-- 会社名 -->
          <h1 class="font-serif font-bold leading-none tracking-tight mb-6">
            <span
              v-for="(char, i) in cfg.name.split('')"
              :key="i"
              class="inline-block text-white transition-all duration-600"
              :class="[
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
                char === ' ' ? 'mr-4' : '',
              ]"
              :style="{ fontSize: 'clamp(3rem, 8vw, 6rem)', transitionDelay: `${200 + i * 50}ms` }"
            >{{ char === ' ' ? '\u00A0' : char }}</span>
          </h1>

          <!-- キャッチコピー -->
          <p
            class="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl transition-all duration-700"
            :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            style="transition-delay: 600ms"
          >
            {{ cfg.catchcopy }}
          </p>

          <!-- CTAボタン -->
          <div
            class="flex flex-col sm:flex-row gap-4 transition-all duration-700"
            :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
            style="transition-delay: 750ms"
          >
            <NuxtLink
              :to="`${prefix}/contact`"
              class="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-sky-900/40"
            >
              <UIcon
                name="i-heroicons-envelope"
                class="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5"
              />
              無料お見積り・ご相談
            </NuxtLink>
            <a
              :href="`tel:${cfg.tel}`"
              class="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-slate-700 hover:border-sky-500 bg-white/5 hover:bg-sky-500/10 text-white rounded-xl font-semibold text-base transition-all duration-200"
            >
              <UIcon
                name="i-heroicons-phone"
                class="w-5 h-5 text-sky-400"
              />
              {{ cfg.tel }}
            </a>
          </div>
        </div>

        <!-- 右: スタッツグリッド (2/5) -->
        <div
          class="lg:col-span-2 grid grid-cols-2 gap-4 transition-all duration-700"
          :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 400ms"
        >
          <!-- 統計1: メイン（横長） -->
          <div class="bg-white/5 border border-white/10 hover:border-sky-500/40 rounded-2xl p-6 transition-all duration-300 col-span-2">
            <p class="text-4xl font-bold text-white font-serif tabular-nums">
              {{ statsVisible ? stat1.count.value : 0 }}<span class="text-sky-400 text-2xl">{{ statsConfig[0]?.suffix }}</span>
            </p>
            <p class="text-sm text-slate-500 mt-1.5 font-medium">
              {{ statsConfig[0]?.label }}
            </p>
          </div>

          <!-- 統計2 -->
          <div class="bg-white/5 border border-white/10 hover:border-sky-500/40 rounded-2xl p-6 transition-all duration-300">
            <p class="text-4xl font-bold text-white font-serif tabular-nums">
              {{ statsVisible ? stat2.count.value : 0 }}<span class="text-sky-400 text-xl">{{ statsConfig[1]?.suffix }}</span>
            </p>
            <p class="text-sm text-slate-500 mt-1.5 font-medium">
              {{ statsConfig[1]?.label }}
            </p>
          </div>

          <!-- 統計3 -->
          <div class="bg-white/5 border border-white/10 hover:border-sky-500/40 rounded-2xl p-6 transition-all duration-300">
            <p class="text-4xl font-bold text-white font-serif tabular-nums">
              {{ statsVisible ? stat3.count.value : 0 }}<span class="text-sky-400 text-xl">{{ statsConfig[2]?.suffix }}</span>
            </p>
            <p class="text-sm text-slate-500 mt-1.5 font-medium">
              {{ statsConfig[2]?.label }}
            </p>
          </div>

          <!-- 対応エリア -->
          <div
            v-if="cfg.serviceArea"
            class="bg-sky-600/15 border border-sky-500/30 rounded-2xl p-6 col-span-2"
          >
            <div class="flex items-center gap-2 mb-1.5">
              <UIcon
                name="i-heroicons-map-pin"
                class="w-4 h-4 text-sky-400"
              />
              <p class="text-sm text-slate-400 font-medium">
                対応エリア
              </p>
            </div>
            <p class="text-white font-semibold">
              {{ cfg.serviceArea }}
            </p>
          </div>
        </div>
      </div>

      <!-- 強み (下部バー) -->
      <div
        class="mt-16 pt-10 border-t border-white/8 grid sm:grid-cols-3 gap-6 transition-all duration-700"
        :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        style="transition-delay: 900ms"
      >
        <div
          v-for="feature in cfg.features"
          :key="feature.title"
          class="flex items-start gap-4"
        >
          <div class="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/20 flex items-center justify-center shrink-0">
            <UIcon
              :name="feature.icon"
              class="w-5 h-5 text-sky-400"
            />
          </div>
          <div>
            <p class="text-sm font-semibold text-white mb-0.5">
              {{ feature.title }}
            </p>
            <p class="text-xs text-slate-500 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 下部スクロールインジケーター -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700"
      :class="mounted ? 'opacity-100' : 'opacity-0'"
      style="transition-delay: 1200ms"
    >
      <span class="text-[10px] tracking-[0.3em] uppercase text-slate-600">Scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-sky-500/50 to-transparent animate-pulse" />
    </div>
  </section>
</template>
