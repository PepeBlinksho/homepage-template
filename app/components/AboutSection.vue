<script setup lang="ts">
import { siteConfig } from '~/config/site'

const { el, revealed } = useReveal()

// ベントーグリッドの各カードスタイル
const cardStyles = [
  { bg: 'bg-stone-900 text-white', iconBg: 'bg-amber-500/20', iconColor: 'text-amber-400' },
  { bg: 'bg-white border border-stone-100', iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
  { bg: 'bg-amber-50', iconBg: 'bg-amber-100', iconColor: 'text-amber-700' },
]
</script>

<template>
  <section
    ref="el"
    class="py-14 md:py-16 bg-stone-50 overflow-hidden flex flex-col justify-center h-full"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- セクションヘッダー -->
      <div
        class="transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <SectionHeader
          label="About"
          title="私たちについて"
        />
      </div>

      <!-- ベントーグリッド -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- 説明カード（lg: 2/3幅） -->
        <div
          class="lg:col-span-2 bg-white border border-stone-100 rounded-3xl p-8 md:p-10 card-lift transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 100ms"
        >
          <div class="flex items-start gap-4 mb-6">
            <div class="w-1 h-12 bg-gradient-to-b from-amber-500 to-amber-300 rounded-full shrink-0 mt-1" />
            <h3 class="font-serif text-2xl md:text-3xl font-semibold text-stone-900 leading-snug">
              {{ siteConfig.aboutTagline }}
            </h3>
          </div>
          <p class="text-stone-600 leading-relaxed text-base md:text-lg pl-5">
            {{ siteConfig.description }}
          </p>
        </div>

        <!-- 特徴カード 1 -->
        <div
          v-for="(feature, i) in siteConfig.features"
          :key="feature.title"
          class="rounded-3xl p-8 card-lift transition-all duration-700"
          :class="[
            cardStyles[i]?.bg,
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
          ]"
          :style="{ transitionDelay: `${(i + 2) * 100}ms` }"
        >
          <div
            class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
            :class="cardStyles[i]?.iconBg"
          >
            <UIcon
              :name="feature.icon"
              class="w-6 h-6"
              :class="cardStyles[i]?.iconColor"
            />
          </div>
          <h4
            class="font-semibold text-lg mb-3"
            :class="i === 0 ? 'text-white' : 'text-stone-900'"
          >
            {{ feature.title }}
          </h4>
          <p
            class="text-sm leading-relaxed"
            :class="i === 0 ? 'text-white/60' : 'text-stone-500'"
          >
            {{ feature.description }}
          </p>
        </div>

        <!-- CTAカード（グラデーション） -->
        <div
          class="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 flex flex-col justify-between card-lift transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 500ms"
        >
          <p class="font-serif text-xl text-white/90 leading-snug mb-6">
            "{{ siteConfig.catchcopy }}"
          </p>
          <UButton
            to="/menu"
            variant="outline"
            class="border-white/60 text-white hover:bg-white/15 self-start"
          >
            メニューを見る
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
