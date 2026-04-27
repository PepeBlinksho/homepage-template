<script setup lang="ts">
import { siteConfig } from '~/config/site'

const mounted = ref(false)
const imageError = ref(false)
const heroRef = ref<HTMLElement | null>(null)
const heroImage = siteConfig.images.hero
const bgY = ref(0)

// 店名を文字単位で分割
const nameChars = computed(() => siteConfig.name.split(''))
// CTA が現れ始めるディレイ（文字アニメーション完了後）
const ctaDelay = computed(() => 400 + nameChars.value.length * 45 + 200)

let scrollHandler: () => void

onMounted(() => {
  mounted.value = true

  scrollHandler = () => {
    if (!heroRef.value) return
    const rect = heroRef.value.getBoundingClientRect()
    if (rect.bottom > 0) {
      bgY.value = -window.scrollY * 0.35
    }
  }
  window.addEventListener('scroll', scrollHandler, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
})
</script>

<template>
  <section
    ref="heroRef"
    class="relative h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- パーallax背景コンテナ -->
    <div
      class="absolute inset-0 will-change-transform"
      :style="{ transform: `translateY(${bgY}px) scale(1.15)` }"
    >
      <!-- グラデーションフォールバック -->
      <div class="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950" />

      <!-- ヒーロー画像（site.ts の images.hero に画像パスを設定） -->
      <NuxtImg
        v-if="heroImage && !imageError"
        :src="heroImage"
        alt="ヒーロー画像"
        class="absolute inset-0 w-full h-full object-cover"
        format="webp"
        quality="80"
        @error="imageError = true"
      />
    </div>

    <!-- グレインテクスチャ -->
    <div class="grain-overlay" />

    <!-- グラデーションオーバーレイ（下部へのフェード） -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/70 z-[2]" />

    <!-- 装飾ライン（左） -->
    <div
      class="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10 transition-all duration-1000"
      :class="mounted ? 'opacity-100' : 'opacity-0'"
      :style="{ transitionDelay: '1200ms' }"
    >
      <div class="w-px h-20 bg-gradient-to-b from-transparent to-white/30" />
      <span class="text-[10px] tracking-[0.4em] text-white/30 rotate-90 my-4 uppercase">Scroll</span>
      <div class="w-px h-20 bg-gradient-to-b from-white/30 to-transparent" />
    </div>

    <!-- メインコンテンツ -->
    <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
      <!-- 英語ラベル -->
      <p
        class="text-xs tracking-[0.7em] uppercase text-white/40 mb-6 transition-all duration-700"
        :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        style="transition-delay: 100ms"
      >
        {{ siteConfig.nameEn }}
      </p>

      <!-- 横ライン -->
      <div
        class="mx-auto mb-8 h-px bg-white/25 transition-all duration-700"
        :class="mounted ? 'w-16' : 'w-0'"
        style="transition-delay: 250ms"
      />

      <!-- 店名（文字単位アニメーション） -->
      <h1 class="font-serif font-semibold text-5xl md:text-7xl lg:text-8xl leading-none mb-6 tracking-tight">
        <span
          v-for="(char, i) in nameChars"
          :key="i"
          class="inline-block transition-all duration-500"
          :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${350 + i * 45}ms` }"
        >{{ char === ' ' ? ' ' : char }}</span>
      </h1>

      <!-- キャッチコピー -->
      <p
        class="text-base md:text-xl text-white/65 mb-12 font-light transition-all duration-700"
        :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        :style="{ transitionDelay: `${ctaDelay - 100}ms` }"
      >
        {{ siteConfig.catchcopy }}
      </p>

      <!-- CTAボタン -->
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700"
        :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        :style="{ transitionDelay: `${ctaDelay}ms` }"
      >
        <UButton
          to="/menu"
          size="xl"
          color="primary"
          class="font-medium"
        >
          メニューを見る
        </UButton>
        <UButton
          v-if="siteConfig.reservation"
          :to="siteConfig.reservation"
          target="_blank"
          rel="noopener noreferrer"
          size="xl"
          color="primary"
          variant="outline"
          class="border-white/50 text-white hover:bg-white/10 hover:border-white transition-all"
          external
        >
          ご予約はこちら
        </UButton>
        <UButton
          to="/#access"
          size="xl"
          variant="outline"
          class="border-white/50 text-white hover:bg-white/10 hover:border-white transition-all"
        >
          アクセス
        </UButton>
      </div>
    </div>

    <!-- スクロール促進（下部中央） -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35 z-10 transition-all duration-700"
      :class="mounted ? 'opacity-100' : 'opacity-0'"
      :style="{ transitionDelay: `${ctaDelay + 400}ms` }"
    >
      <div class="w-px h-16 bg-gradient-to-b from-white/35 to-transparent animate-pulse" />
    </div>
  </section>
</template>
