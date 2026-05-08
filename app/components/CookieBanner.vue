<script setup lang="ts">
const { hasDecided, grant, deny } = useCookieConsent()
const { public: pub } = useRuntimeConfig()
const route = useRoute()
const prefix = useRoutePrefix()

const isDemoRoute = computed(() =>
  ['/shop/', '/demo/', '/beauty/', '/corp/'].some(p => route.path.startsWith(p))
)

// GAが設定されており未選択かつメインサイトのみ表示
const show = computed(() => !!pub.gaId && !hasDecided.value && !isDemoRoute.value)

const privacyUrl = computed(() => `${prefix.value || ''}/privacy`)
</script>

<template>
  <Transition name="banner">
    <div
      v-if="show"
      class="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-stone-200 shadow-lg"
      role="dialog"
      aria-label="Cookie使用の同意"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p class="text-sm text-stone-600 leading-relaxed flex-1">
          当サイトはGoogle Analyticsを使用してアクセス状況を分析しています。
          詳細は
          <NuxtLink :to="privacyUrl" class="underline underline-offset-2 hover:text-stone-900 transition-colors">
            プライバシーポリシー
          </NuxtLink>
          をご確認ください。
        </p>
        <div class="flex items-center gap-3 shrink-0">
          <button
            class="text-sm text-stone-500 hover:text-stone-800 transition-colors px-3 py-1.5"
            @click="deny"
          >
            拒否する
          </button>
          <button
            class="text-sm font-medium bg-amber-500 hover:bg-amber-600 text-white px-5 py-1.5 rounded-lg transition-colors"
            @click="grant"
          >
            同意する
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.banner-enter-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.banner-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.banner-enter-from,
.banner-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
