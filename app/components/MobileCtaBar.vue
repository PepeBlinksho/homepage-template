<script setup lang="ts">
const siteConfig = useShopConfig()
const route = useRoute()

const isDemoOrCorp = computed(() =>
  ['/shop/', '/demo/', '/beauty/', '/corp/'].some(p => route.path.startsWith(p)),
)

const hasTel = computed(() => !!siteConfig.value.tel)
const hasLine = computed(() => !!siteConfig.value.sns.line)
const show = computed(() => !isDemoOrCorp.value && hasTel.value)
</script>

<template>
  <Transition name="slide-up">
    <div
      v-if="show"
      class="fixed bottom-0 inset-x-0 z-40 md:hidden"
      style="padding-bottom: env(safe-area-inset-bottom)"
    >
      <div
        class="grid border-t border-stone-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]"
        :class="hasLine ? 'grid-cols-2' : 'grid-cols-1'"
      >
        <a
          :href="`tel:${siteConfig.tel}`"
          class="flex items-center justify-center gap-2 py-4 bg-amber-500 active:bg-amber-600 text-white font-semibold text-sm tracking-wide transition-colors"
        >
          <UIcon name="i-heroicons-phone" class="w-5 h-5" />
          今すぐ電話
        </a>
        <a
          v-if="hasLine"
          :href="siteConfig.sns.line"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 py-4 active:opacity-90 text-white font-semibold text-sm tracking-wide transition-colors"
          style="background-color: #06C755"
        >
          <UIcon name="i-simple-icons-line" class="w-5 h-5" />
          LINEで問い合わせ
        </a>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
