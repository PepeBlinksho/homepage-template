<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

const siteConfig = useShopConfig()
const { el, revealed } = useReveal()

const images = computed(() => siteConfig.value.images.gallery)
const hasImages = computed(() => images.value.length > 0)
const placeholderCount = 6

const displayItems = computed(() =>
  hasImages.value
    ? images.value.slice(0, 6).map((src, i) => ({ src, index: i }))
    : Array.from({ length: placeholderCount }, (_, i) => ({ src: '', index: i })),
)

const placeholderBg = (i: number) => {
  if (i % 3 === 1) return 'bg-stone-800'
  if (i % 3 === 2) return 'bg-stone-700'
  return 'bg-stone-800/70'
}

// Embla カルーセル（モバイル用）
const [emblaRef] = emblaCarouselVue({ dragFree: true, loop: false, align: 'start' })
</script>

<template>
  <section class="h-full bg-stone-900 flex flex-col justify-center pt-20 pb-8 overflow-hidden">
    <div class="max-w-6xl mx-auto w-full px-4 sm:px-6">
      <div
        class="mb-4 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <SectionHeader
          label="Gallery"
          title="ギャラリー"
          light
        />
      </div>
    </div>

    <!-- デスクトップ: グリッド -->
    <div
      ref="el"
      class="hidden md:grid grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto w-full px-4 sm:px-6"
    >
      <div
        v-for="item in displayItems"
        :key="item.index"
        class="relative overflow-hidden rounded-xl transition-all duration-700"
        :class="[
          revealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
          item.index === 0 ? 'col-span-2 row-span-2 aspect-video' : 'aspect-square',
        ]"
        :style="{ transitionDelay: `${item.index * 80}ms` }"
      >
        <NuxtImg
          v-if="hasImages"
          :src="item.src"
          :alt="`ギャラリー ${item.index + 1}`"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div
          v-else
          class="w-full h-full flex flex-col items-center justify-center gap-2"
          :class="placeholderBg(item.index)"
        >
          <UIcon name="i-heroicons-photo" class="w-8 h-8 text-stone-500" />
          <span class="text-xs text-stone-500 tracking-widest">PHOTO {{ item.index + 1 }}</span>
        </div>
      </div>
    </div>

    <!-- モバイル: Embla 横スクロールカルーセル -->
    <div
      :ref="emblaRef"
      class="md:hidden overflow-hidden"
    >
      <div class="flex gap-3 pl-4 pr-4">
        <div
          v-for="item in displayItems"
          :key="item.index"
          class="flex-none w-[78vw] aspect-[3/4] rounded-xl overflow-hidden transition-all duration-700"
          :class="revealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
          :style="{ transitionDelay: `${item.index * 60}ms` }"
        >
          <NuxtImg
            v-if="hasImages"
            :src="item.src"
            :alt="`ギャラリー ${item.index + 1}`"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div
            v-else
            class="w-full h-full flex flex-col items-center justify-center gap-2"
            :class="placeholderBg(item.index)"
          >
            <UIcon name="i-heroicons-photo" class="w-8 h-8 text-stone-500" />
            <span class="text-xs text-stone-500 tracking-widest">PHOTO {{ item.index + 1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
