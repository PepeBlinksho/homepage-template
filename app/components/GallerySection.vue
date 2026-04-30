<script setup lang="ts">
import { siteConfig } from '~/config/site'

const { el, revealed } = useReveal()

const images = computed(() => siteConfig.images.gallery)
const hasImages = computed(() => images.value.length > 0)

const placeholderCount = 6
</script>

<template>
  <section class="h-full bg-stone-900 flex flex-col justify-center py-20 px-4 sm:px-6 overflow-hidden">
    <div class="max-w-6xl mx-auto w-full">
      <!-- ヘッダー -->
      <div
        class="transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <SectionHeader
          label="Gallery"
          title="ギャラリー"
          light
        />
      </div>

      <!-- 画像グリッド -->
      <div
        ref="el"
        class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
      >
        <!-- 実画像 -->
        <template v-if="hasImages">
          <div
            v-for="(src, i) in images.slice(0, 6)"
            :key="src"
            class="relative aspect-square overflow-hidden rounded-xl transition-all duration-700"
            :class="[
              revealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
              i === 0 ? 'md:col-span-2 md:row-span-2 md:aspect-auto' : '',
            ]"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <NuxtImg
              :src="src"
              :alt="`ギャラリー ${i + 1}`"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </template>

        <!-- プレースホルダー（画像未設定時） -->
        <template v-else>
          <div
            v-for="i in placeholderCount"
            :key="i"
            class="relative aspect-square overflow-hidden rounded-xl transition-all duration-700"
            :class="[
              revealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
              i === 1 ? 'md:col-span-2 md:row-span-2 md:aspect-auto' : '',
            ]"
            :style="{ transitionDelay: `${(i - 1) * 80}ms` }"
          >
            <div
              class="w-full h-full flex flex-col items-center justify-center gap-2 min-h-[140px]"
              :class="[
                i % 3 === 1 ? 'bg-stone-800' : '',
                i % 3 === 2 ? 'bg-stone-700' : '',
                i % 3 === 0 ? 'bg-stone-800/70' : '',
              ]"
            >
              <UIcon name="i-heroicons-photo" class="w-8 h-8 text-stone-500" />
              <span class="text-xs text-stone-500 tracking-widest">PHOTO {{ i }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
