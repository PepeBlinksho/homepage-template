<script setup lang="ts">
import { siteConfig } from '~/config/site'

const { scrollY } = useSharedScroll()
const isMenuOpen = ref(false)
const route = useRoute()

const isHomePage = computed(() => route.path === '/')
const isScrolled = computed(() => scrollY.value > 80)
const hasBackground = computed(() => !isHomePage.value || isScrolled.value)

const navLinks = [
  { label: 'トップ', to: '/' },
  { label: 'メニュー', to: '/menu' },
  { label: 'アクセス', to: '/#access' },
  { label: 'お知らせ', to: '/news' },
  { label: 'お問い合わせ', to: '/contact' },
]

watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})

function isActive(link: { to: string }): boolean {
  if (link.to === '/') return route.path === '/'
  const basePath = link.to.split('#')[0] ?? '/'
  return basePath !== '/' && route.path.startsWith(basePath)
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="hasBackground
      ? 'bg-white/90 backdrop-blur-md shadow-sm'
      : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- ロゴ -->
      <NuxtLink
        to="/"
        class="font-serif text-lg font-semibold tracking-wide transition-colors duration-300"
        :class="hasBackground ? 'text-stone-900' : 'text-white'"
      >
        {{ siteConfig.name }}
      </NuxtLink>

      <!-- デスクトップナビ -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="relative text-sm font-medium transition-colors duration-300 group py-1"
          :class="[
            hasBackground ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white',
            isActive(link) ? (hasBackground ? 'text-amber-800' : 'text-amber-300') : '',
          ]"
        >
          {{ link.label }}
          <!-- ホバー下線アニメーション -->
          <span
            class="absolute -bottom-0.5 left-0 h-px bg-amber-500 transition-all duration-300 w-0 group-hover:w-full"
            :class="isActive(link) ? 'w-full' : 'w-0'"
          />
        </NuxtLink>
      </nav>

      <!-- スマホ：ハンバーガー -->
      <button
        class="md:hidden p-2 rounded-lg transition-colors"
        :class="hasBackground ? 'text-stone-700' : 'text-white'"
        aria-label="メニューを開く"
        @click="isMenuOpen = true"
      >
        <UIcon
          name="i-heroicons-bars-3"
          class="w-6 h-6"
        />
      </button>
    </div>

    <!-- モバイルスライドオーバー -->
    <USlideover
      v-model:open="isMenuOpen"
      side="right"
    >
      <template #content>
        <div class="h-full bg-white">
          <div class="flex items-center justify-between px-6 py-5 border-b border-stone-100">
            <span class="font-serif text-lg font-semibold text-stone-900">{{ siteConfig.name }}</span>
            <button
              class="p-2 text-stone-400 hover:text-stone-700 transition-colors"
              aria-label="閉じる"
              @click="isMenuOpen = false"
            >
              <UIcon
                name="i-heroicons-x-mark"
                class="w-5 h-5"
              />
            </button>
          </div>
          <nav class="flex flex-col px-6 pt-6">
            <NuxtLink
              v-for="(link, i) in navLinks"
              :key="link.to"
              :to="link.to"
              class="flex items-center justify-between py-4 border-b border-stone-100 text-stone-700 hover:text-amber-800 transition-colors group"
              :class="{ 'text-amber-800 font-semibold': isActive(link) }"
              :style="{ transitionDelay: `${i * 50}ms` }"
              @click="isMenuOpen = false"
            >
              <span class="font-medium">{{ link.label }}</span>
              <UIcon
                name="i-heroicons-chevron-right"
                class="w-4 h-4 text-stone-300 group-hover:text-amber-400 transition-colors"
              />
            </NuxtLink>
          </nav>
        </div>
      </template>
    </USlideover>
  </header>
</template>
