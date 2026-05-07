<script setup lang="ts">
const cfg = useCorpConfig()
const prefix = useRoutePrefix()
const { el, revealed } = useReveal()
</script>

<template>
  <section
    id="services"
    ref="el"
    class="py-20 md:py-24 bg-slate-50"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- ヘッダー -->
      <div
        class="mb-14 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="text-xs tracking-[0.5em] uppercase text-sky-600 font-medium mb-3">Services</p>
        <h2 class="font-serif text-4xl md:text-5xl font-semibold text-slate-900 mb-4">事業内容</h2>
        <div class="w-10 h-0.5 bg-sky-500" />
      </div>

      <!-- サービスグリッド -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, i) in cfg.services"
          :key="service.title"
          class="bg-white rounded-2xl p-8 card-lift border border-slate-100 transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-5">
            <UIcon :name="service.icon" class="w-6 h-6 text-sky-600" />
          </div>
          <h3 class="font-semibold text-lg text-slate-900 mb-3">{{ service.title }}</h3>
          <p class="text-sm text-slate-500 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div
        class="mt-12 text-center transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        :style="{ transitionDelay: `${cfg.services.length * 80}ms` }"
      >
        <NuxtLink
          :to="`${prefix}/contact`"
          class="inline-flex items-center gap-2 px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-md shadow-sky-200"
        >
          <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
          無料お見積り・ご相談はこちら
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
