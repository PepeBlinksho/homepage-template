<script setup lang="ts">
interface SectionDot {
  id: string
  label: string
}

const sections: SectionDot[] = [
  { id: 'snap-hero', label: 'Hero' },
  { id: 'snap-about', label: 'About' },
  { id: 'snap-menu', label: 'Menu' },
  { id: 'snap-news', label: 'News' },
  { id: 'snap-access', label: 'Access' },
]

const nuxtApp = useNuxtApp()
const activeIndex = ref(0)

onMounted(() => {
  // html ドキュメントを root にして各セクションの可視状態を監視
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const index = sections.findIndex(s => s.id === entry.target.id)
          if (index >= 0) activeIndex.value = index
        }
      })
    },
    { threshold: 0.5 }, // root 省略 = viewport 基準
  )

  sections.forEach((s) => {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  })

  onUnmounted(() => observer.disconnect())
})

function scrollToSection(index: number) {
  const id = sections[index]?.id
  const section = id ? document.getElementById(id) : null
  if (!section) return

  // lenis が利用可能な場合は lenis の scrollTo でスムーズに移動
  const lenis = nuxtApp.$lenis
  if (lenis) {
    lenis.scrollTo(section, { duration: 1.2 })
  }
  else {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <!-- デスクトップのみ表示 -->
  <nav
    class="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
    aria-label="セクションナビゲーション"
  >
    <button
      v-for="(section, i) in sections"
      :key="section.id"
      class="group flex items-center gap-2 justify-end"
      :aria-label="`${section.label}セクションへ移動`"
      @click="scrollToSection(i)"
    >
      <!-- ラベル（ホバー・アクティブ時に表示） -->
      <span
        class="text-[11px] font-medium tracking-wide transition-all duration-200 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        :class="activeIndex === i
          ? '!opacity-100 !translate-x-0 text-amber-400'
          : 'text-white/50'"
      >
        {{ section.label }}
      </span>

      <!-- ドット -->
      <div
        class="rounded-full transition-all duration-300"
        :class="activeIndex === i
          ? 'w-2.5 h-2.5 bg-amber-400 shadow-sm shadow-amber-400/60'
          : 'w-1.5 h-1.5 bg-white/35 group-hover:bg-white/70'"
      />
    </button>
  </nav>
</template>
