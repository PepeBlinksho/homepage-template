<script setup lang="ts">
const siteConfig = useShopConfig()

useSeoMeta({
  title: `メニュー | ${siteConfig.value.name}`,
  description: `${siteConfig.value.name}のメニュー一覧です。`,
  ogTitle: `メニュー | ${siteConfig.value.name}`,
  ogDescription: `${siteConfig.value.name}のメニュー一覧です。`,
  ogImage: siteConfig.value.seo.ogImage,
  ogType: 'website',
})

const tabs = computed(() =>
  siteConfig.value.menus.map((menu, index) => ({
    label: menu.category,
    key: index,
  })),
)

const activeTab = ref(0)

const { el, revealed } = useReveal()
</script>

<template>
  <div class="pt-16 min-h-screen bg-white">
    <div class="relative bg-stone-900 py-24 overflow-hidden">
      <div class="grain-overlay opacity-[0.04]" />
      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <p class="text-xs tracking-[0.5em] uppercase text-amber-400 mb-3">Menu</p>
        <h1 class="font-serif text-5xl md:text-6xl font-semibold text-white">メニュー</h1>
        <div class="w-12 h-0.5 bg-amber-500 mt-4" />
      </div>
    </div>

    <div ref="el" class="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <div
        class="transition-all duration-700 mb-12"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <UTabs
          :items="tabs"
          @update:model-value="(val: string | number) => activeTab = Number(val)"
        />
      </div>

      <div
        v-for="(menu, index) in siteConfig.menus"
        :key="menu.category"
        v-show="activeTab === index"
      >
        <div class="grid sm:grid-cols-2 gap-4">
          <div
            v-for="(item, itemIndex) in menu.items"
            :key="item.name"
            class="group bg-stone-50 hover:bg-amber-50 rounded-2xl p-6 card-lift transition-all duration-700"
            :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            :style="{ transitionDelay: `${(itemIndex + 1) * 80}ms` }"
          >
            <div class="flex justify-between items-start mb-3">
              <h3 class="font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">
                {{ item.name }}
              </h3>
              <span class="font-serif text-xl font-semibold text-amber-600 ml-4 shrink-0">
                ¥{{ item.price.toLocaleString() }}
              </span>
            </div>
            <p class="text-sm text-stone-500 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
