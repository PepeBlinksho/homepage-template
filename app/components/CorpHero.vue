<script setup lang="ts">
const cfg = useCorpConfig()
const prefix = useRoutePrefix()

const mounted = ref(false)
const imageError = ref(false)
const heroRef = ref<HTMLElement | null>(null)
const heroImage = computed(() => cfg.value.images.hero)

const { scrollY } = useSharedScroll()
const isVisible = ref(true)
const bgY = ref(0)
let io: IntersectionObserver | null = null

watch(scrollY, (y) => {
  if (isVisible.value) bgY.value = -y * 0.3
})

const nameChars = computed(() => cfg.value.name.split(''))
const ctaDelay = computed(() => 400 + nameChars.value.length * 40 + 200)

onMounted(() => {
  mounted.value = true
  if (heroRef.value) {
    io = new IntersectionObserver(
      (entries) => { isVisible.value = entries[0]?.isIntersecting ?? true },
      { threshold: 0 },
    )
    io.observe(heroRef.value)
  }
})
onUnmounted(() => { io?.disconnect(); io = null })
</script>

<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- 背景 -->
    <div
      class="absolute inset-0"
      :class="isVisible ? 'will-change-transform' : ''"
      :style="{ transform: `translateY(${bgY}px) scale(1.1)` }"
    >
      <!-- デフォルト: ダークグラデーション背景 -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950" />
      <!-- ヒーロー画像（設定時のみ表示） -->
      <NuxtImg
        v-if="heroImage && !imageError"
        :src="heroImage"
        alt="ヒーロー画像"
        class="absolute inset-0 w-full h-full object-cover"
        format="webp"
        quality="80"
        fetchpriority="high"
        preload
        @error="imageError = true"
      />
    </div>

    <!-- グレインテクスチャ -->
    <div class="grain-overlay" />

    <!-- オーバーレイ -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/65 z-[2]" />

    <!-- ジオメトリックアクセント -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full -translate-y-1/2 translate-x-1/2 z-[1]" />
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/5 rounded-full translate-y-1/2 -translate-x-1/2 z-[1]" />

    <!-- メインコンテンツ -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
      <!-- 左: テキスト -->
      <div class="flex-1 text-white">
        <!-- 英語ラベル -->
        <p
          class="text-xs tracking-[0.6em] uppercase text-sky-400/80 mb-5 transition-all duration-700"
          :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          style="transition-delay: 100ms"
        >
          {{ cfg.nameEn }}
        </p>

        <!-- 横ライン -->
        <div
          class="mb-6 h-px bg-sky-500/50 transition-all duration-700"
          :class="mounted ? 'w-12' : 'w-0'"
          style="transition-delay: 200ms"
        />

        <!-- 会社名 -->
        <h1 class="font-serif font-semibold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 tracking-tight">
          <span
            v-for="(char, i) in nameChars"
            :key="i"
            class="inline-block transition-all duration-500"
            :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${300 + i * 40}ms` }"
          >{{ char === ' ' ? ' ' : char }}</span>
        </h1>

        <!-- キャッチコピー -->
        <p
          class="text-lg md:text-xl text-white/70 mb-10 font-light leading-relaxed transition-all duration-700"
          :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          :style="{ transitionDelay: `${ctaDelay - 100}ms` }"
        >
          {{ cfg.catchcopy }}
        </p>

        <!-- CTAボタン -->
        <div
          class="flex flex-col sm:flex-row gap-4 transition-all duration-700"
          :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          :style="{ transitionDelay: `${ctaDelay}ms` }"
        >
          <NuxtLink
            :to="`${prefix}/contact`"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-semibold text-base transition-all duration-200 shadow-lg shadow-sky-900/30"
          >
            <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
            無料お見積り・ご相談
          </NuxtLink>
          <a
            :href="`tel:${cfg.tel}`"
            class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/30 hover:bg-white/20 text-white rounded-xl font-semibold text-base transition-all duration-200 backdrop-blur-sm"
          >
            <UIcon name="i-heroicons-phone" class="w-5 h-5" />
            {{ cfg.tel }}
          </a>
        </div>
      </div>

      <!-- 右: 信頼バッジ -->
      <div
        class="flex-shrink-0 w-full lg:w-72 transition-all duration-700"
        :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        :style="{ transitionDelay: `${ctaDelay + 200}ms` }"
      >
        <div class="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 space-y-5">
          <p class="text-xs tracking-widest uppercase text-sky-400 font-medium">実績・信頼</p>
          <div
            v-for="feature in cfg.features"
            :key="feature.title"
            class="flex items-start gap-4"
          >
            <div class="w-9 h-9 rounded-xl bg-sky-500/20 flex items-center justify-center shrink-0">
              <UIcon :name="feature.icon" class="w-4 h-4 text-sky-400" />
            </div>
            <div>
              <p class="text-sm font-semibold text-white mb-0.5">{{ feature.title }}</p>
              <p class="text-xs text-white/50 leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- スクロール促進 -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-10 transition-all duration-700"
      :class="mounted ? 'opacity-100' : 'opacity-0'"
      :style="{ transitionDelay: `${ctaDelay + 400}ms` }"
    >
      <div class="w-px h-14 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
    </div>
  </section>
</template>
