<script setup lang="ts">
const cfg = useCorpConfig()
const prefix = useRoutePrefix()
const { el, revealed } = useReveal()
</script>

<template>
  <section
    id="services"
    ref="el"
    class="py-24 md:py-32 bg-white relative overflow-hidden"
  >
    <!-- 背景テキスト装飾 -->
    <div
      class="absolute top-8 right-0 font-serif font-bold text-[12rem] md:text-[18rem] leading-none text-slate-50 select-none pointer-events-none translate-x-1/4"
      aria-hidden="true"
    >
      07
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
      <!-- ヘッダー -->
      <div
        class="mb-20 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="flex items-center gap-4 mb-5">
          <div class="w-8 h-px bg-sky-500" />
          <span class="text-xs tracking-[0.4em] uppercase text-sky-600 font-medium">Services</span>
        </div>
        <h2 class="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
          事業内容
        </h2>
      </div>

      <!-- サービスグリッド -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="(service, i) in cfg.services"
          :key="service.title"
          :to="service.slug ? `${prefix}/services/${service.slug}` : undefined"
          class="group relative bg-slate-50 hover:bg-white rounded-3xl p-8 border border-transparent hover:border-sky-100 hover:shadow-xl hover:shadow-sky-50 transition-all duration-400 overflow-hidden"
          :class="[
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            service.slug ? 'cursor-pointer' : 'cursor-default',
          ]"
          :style="{ transitionDelay: `${i * 80}ms`, transitionDuration: '600ms' }"
        >
          <!-- 大番号（背景） -->
          <span
            class="absolute -top-4 -right-2 font-serif font-bold text-8xl text-slate-100 group-hover:text-sky-50 select-none transition-colors duration-300 leading-none"
            aria-hidden="true"
          >{{ String(i + 1).padStart(2, '0') }}</span>

          <!-- アイコン -->
          <div class="relative z-10 w-12 h-12 rounded-2xl bg-sky-100 group-hover:bg-sky-600 flex items-center justify-center mb-6 transition-all duration-300">
            <UIcon
              :name="service.icon"
              class="w-6 h-6 text-sky-600 group-hover:text-white transition-colors duration-300"
            />
          </div>

          <!-- テキスト -->
          <h3 class="relative z-10 font-bold text-xl text-slate-900 mb-3 leading-snug">
            {{ service.title }}
          </h3>
          <p class="relative z-10 text-sm text-slate-500 leading-relaxed">
            {{ service.description }}
          </p>

          <!-- 詳細リンク（slug が設定されている場合） -->
          <div
            v-if="service.slug"
            class="relative z-10 mt-5 flex items-center gap-1.5 text-xs font-semibold text-sky-600 group-hover:text-sky-700 transition-colors duration-200"
          >
            商品一覧を見る
            <UIcon
              name="i-heroicons-arrow-right"
              class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </div>

          <!-- ホバー時の底線アクセント -->
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </NuxtLink>
      </div>

      <!-- CTA バナー -->
      <div
        class="mt-16 rounded-3xl bg-slate-900 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        :style="{ transitionDelay: `${cfg.services.length * 80}ms` }"
      >
        <div>
          <p class="text-slate-400 text-sm mb-2">
            まずはお気軽にご相談ください
          </p>
          <p class="font-serif text-2xl md:text-3xl font-bold text-white">
            無料点検・お見積りを受け付けています
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 shrink-0">
          <NuxtLink
            :to="`${prefix}/contact`"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold transition-all duration-200 whitespace-nowrap"
          >
            <UIcon
              name="i-heroicons-envelope"
              class="w-5 h-5"
            />
            お問い合わせ
          </NuxtLink>
          <a
            :href="`tel:${cfg.tel}`"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 hover:border-sky-500 text-white rounded-xl font-semibold transition-all duration-200 whitespace-nowrap"
          >
            <UIcon
              name="i-heroicons-phone"
              class="w-5 h-5 text-sky-400"
            />
            {{ cfg.tel }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
