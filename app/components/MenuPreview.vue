<script setup lang="ts">
import { siteConfig } from '~/config/site'

const props = defineProps<{
  snap?: boolean
}>()

const { el, revealed } = useReveal()

// スナップモードは最初のカテゴリのみ表示
const previewMenus = computed(() =>
  props.snap
    ? siteConfig.menus.slice(0, 1).map(menu => ({ ...menu, items: menu.items.slice(0, 3) }))
    : siteConfig.menus.map(menu => ({ ...menu, items: menu.items.slice(0, 3) })),
)
</script>

<template>
  <section
    ref="el"
    class="bg-white overflow-hidden flex flex-col justify-center"
    :class="snap ? 'py-14 h-full' : 'py-24'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 w-full">
      <!-- セクションヘッダー -->
      <div
        class="transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <SectionHeader
          label="Menu"
          title="メニュー"
          :description="snap ? undefined : 'こだわりの食材と丁寧な仕事から生まれた一品をどうぞ。'"
        />
      </div>

      <!-- カテゴリ別メニュー -->
      <div
        v-for="(menu, menuIndex) in previewMenus"
        :key="menu.category"
        class="transition-all duration-700"
        :class="[
          snap ? 'mb-8' : 'mb-14 last:mb-0',
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
        :style="{ transitionDelay: `${(menuIndex + 1) * 100}ms` }"
      >
        <!-- カテゴリタイトル -->
        <div class="flex items-center gap-4 mb-5">
          <span class="font-serif text-amber-500/30 text-3xl font-bold leading-none select-none">
            {{ String(menuIndex + 1).padStart(2, '0') }}
          </span>
          <div>
            <h3 class="font-serif text-lg font-semibold text-stone-900">
              {{ menu.category }}
            </h3>
            <div class="w-8 h-0.5 bg-amber-400 mt-1" />
          </div>
        </div>

        <!-- メニューカード -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(item, itemIndex) in menu.items"
            :key="item.name"
            class="group bg-stone-50 hover:bg-amber-50 rounded-2xl card-lift transition-all duration-700"
            :class="[
              snap ? 'p-5' : 'p-6',
              revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ]"
            :style="{ transitionDelay: `${(menuIndex + 1) * 100 + itemIndex * 80}ms` }"
          >
            <div class="flex justify-between items-start mb-2">
              <h4 class="font-medium text-stone-900 group-hover:text-amber-700 transition-colors">
                {{ item.name }}
              </h4>
              <span class="font-serif font-semibold text-amber-600 ml-3 shrink-0">
                ¥{{ item.price.toLocaleString() }}
              </span>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- 全メニューへのリンク -->
      <div
        class="flex justify-start transition-all duration-700"
        :class="[
          snap ? 'mt-6' : 'mt-12',
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        ]"
        :style="{ transitionDelay: '400ms' }"
      >
        <UButton
          to="/menu"
          size="lg"
          variant="outline"
          color="primary"
          trailing-icon="i-heroicons-arrow-right"
        >
          メニューをすべて見る
        </UButton>
      </div>
    </div>
  </section>
</template>
