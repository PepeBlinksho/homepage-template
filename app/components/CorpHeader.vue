<script setup lang="ts">
const cfg = useCorpConfig()
const prefix = useRoutePrefix()

const { scrollY } = useSharedScroll()
const isMenuOpen = ref(false)
const route = useRoute()

const isHomePage = computed(() => route.path === prefix.value || route.path === `${prefix.value}/`)
const isScrolled = computed(() => scrollY.value > 80)
const hasBackground = computed(() => !isHomePage.value || isScrolled.value)

const navLinks = computed(() => {
  const p = prefix.value
  return [
    { label: 'トップ', to: p || '/' },
    { label: '事業内容', to: `${p}/#services` },
    { label: cfg.value.worksSectionTitle ?? '施工実績', to: `${p}/#works` },
    { label: '会社概要', to: `${p}/#about` },
    { label: 'お問い合わせ', to: `${p}/contact` },
  ]
})

watch(() => route.fullPath, () => { isMenuOpen.value = false })

function isActive(link: { to: string }): boolean {
  const base = prefix.value || '/'
  if (link.to === base) return route.path === base
  if (link.to.includes('#')) return false
  return route.path.startsWith(link.to)
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="hasBackground ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- ロゴ -->
      <NuxtLink
        :to="prefix || '/'"
        class="font-serif text-lg font-semibold tracking-wide transition-colors duration-300"
        :class="hasBackground ? 'text-slate-900' : 'text-white'"
      >
        {{ cfg.name }}
      </NuxtLink>

      <!-- デスクトップナビ -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="relative text-sm font-medium transition-colors duration-300 group py-1"
          :class="[
            hasBackground ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white',
            isActive(link) ? (hasBackground ? 'text-sky-700' : 'text-sky-300') : '',
          ]"
        >
          {{ link.label }}
          <span
            class="absolute -bottom-0.5 left-0 h-px bg-sky-500 transition-all duration-300"
            :class="isActive(link) ? 'w-full' : 'w-0 group-hover:w-full'"
          />
        </NuxtLink>
      </nav>

      <!-- 電話番号 (デスクトップ) -->
      <a
        :href="`tel:${cfg.tel}`"
        class="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
        :class="hasBackground
          ? 'bg-sky-600 text-white hover:bg-sky-700'
          : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'"
      >
        <UIcon
          name="i-heroicons-phone"
          class="w-4 h-4"
        />
        {{ cfg.tel }}
      </a>

      <!-- スマホ：ハンバーガー -->
      <button
        class="md:hidden p-2 rounded-lg transition-colors"
        :class="hasBackground ? 'text-slate-700' : 'text-white'"
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
          <div class="flex items-center justify-between px-6 py-5 border-b border-slate-100">
            <span class="font-serif text-lg font-semibold text-slate-900">{{ cfg.name }}</span>
            <button
              class="p-2 text-slate-400 hover:text-slate-700 transition-colors"
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
              class="flex items-center justify-between py-4 border-b border-slate-100 text-slate-700 hover:text-sky-700 transition-colors group"
              :class="{ 'text-sky-700 font-semibold': isActive(link) }"
              :style="{ transitionDelay: `${i * 50}ms` }"
              @click="isMenuOpen = false"
            >
              <span class="font-medium">{{ link.label }}</span>
              <UIcon
                name="i-heroicons-chevron-right"
                class="w-4 h-4 text-slate-300 group-hover:text-sky-400 transition-colors"
              />
            </NuxtLink>
          </nav>
          <!-- 電話番号 (モバイル) -->
          <div class="px-6 pt-6">
            <a
              :href="`tel:${cfg.tel}`"
              class="flex items-center justify-center gap-2 w-full py-3 bg-sky-600 text-white rounded-xl font-semibold text-base"
            >
              <UIcon
                name="i-heroicons-phone"
                class="w-5 h-5"
              />
              {{ cfg.tel }}
            </a>
          </div>
        </div>
      </template>
    </USlideover>
  </header>
</template>
