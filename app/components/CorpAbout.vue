<script setup lang="ts">
import { buildCorpAddress } from '~/config/corp'

const cfg = useCorpConfig()
const { el, revealed } = useReveal()

const companyData = computed(() => [
  { label: '会社名', value: cfg.value.name },
  { label: '所在地', value: buildCorpAddress(cfg.value.address) },
  { label: 'TEL', value: cfg.value.tel },
  { label: 'E-mail', value: cfg.value.email },
  { label: '設立', value: cfg.value.established },
  { label: '従業員数', value: cfg.value.employees },
  { label: '対応エリア', value: cfg.value.serviceArea },
  { label: '許可番号', value: cfg.value.license },
].filter(r => r.value))
</script>

<template>
  <section
    id="about"
    ref="el"
    class="py-24 md:py-32 bg-white relative overflow-hidden"
  >
    <!-- 背景テキスト装飾 -->
    <div
      class="absolute bottom-0 left-0 font-serif font-bold text-[12rem] md:text-[18rem] leading-none text-slate-50 select-none pointer-events-none -translate-x-1/4 translate-y-1/4"
      aria-hidden="true"
    >
      AB
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
      <!-- ヘッダー -->
      <div
        class="mb-16 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="flex items-center gap-4 mb-5">
          <div class="w-8 h-px bg-sky-500" />
          <span class="text-xs tracking-[0.4em] uppercase text-sky-600 font-medium">About</span>
        </div>
        <h2 class="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
          会社概要
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <!-- 左: 説明 + 強み -->
        <div
          class="transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 100ms"
        >
          <p class="text-slate-600 leading-relaxed text-base md:text-lg mb-12 border-l-4 border-sky-500 pl-6">
            {{ cfg.description }}
          </p>

          <!-- 強みリスト -->
          <div class="space-y-5">
            <div
              v-for="(feature, i) in cfg.features"
              :key="feature.title"
              class="group flex items-start gap-5 p-5 rounded-2xl hover:bg-sky-50 transition-colors duration-200"
              :class="revealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'"
              :style="{ transitionDelay: `${(i + 2) * 100}ms`, transitionDuration: '600ms' }"
            >
              <div class="w-11 h-11 rounded-xl bg-sky-100 group-hover:bg-sky-600 flex items-center justify-center shrink-0 transition-colors duration-200">
                <UIcon
                  :name="feature.icon"
                  class="w-5 h-5 text-sky-600 group-hover:text-white transition-colors duration-200"
                />
              </div>
              <div>
                <p class="font-bold text-slate-900 mb-1">
                  {{ feature.title }}
                </p>
                <p class="text-sm text-slate-500 leading-relaxed">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右: 会社データ -->
        <div
          class="transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 200ms"
        >
          <div class="rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
            <div class="bg-slate-900 px-8 py-5">
              <p class="text-xs tracking-widest uppercase text-sky-400 font-medium">
                Company Data
              </p>
            </div>
            <dl class="divide-y divide-slate-100">
              <div
                v-for="row in companyData"
                :key="row.label"
                class="flex gap-6 px-8 py-5 hover:bg-slate-50 transition-colors duration-150"
              >
                <dt class="w-24 shrink-0 text-xs font-semibold text-sky-600 uppercase tracking-wide pt-0.5">
                  {{ row.label }}
                </dt>
                <dd class="text-sm text-slate-700 leading-relaxed flex-1 font-medium">
                  {{ row.value }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
