<script setup lang="ts">
import { buildCorpAddress } from '~/config/corp'

const cfg = useCorpConfig()
const { el, revealed } = useReveal()

const companyData = computed(() => {
  const rows = [
    { label: '会社名', value: cfg.value.name },
    { label: '所在地', value: buildCorpAddress(cfg.value.address) },
    { label: '電話番号', value: cfg.value.tel },
    { label: 'メール', value: cfg.value.email },
    { label: '設立', value: cfg.value.established },
    { label: '従業員数', value: cfg.value.employees },
    { label: '対応エリア', value: cfg.value.serviceArea },
    { label: '許可番号', value: cfg.value.license },
  ]
  return rows.filter(r => r.value)
})
</script>

<template>
  <section
    id="about"
    ref="el"
    class="py-20 md:py-24 bg-slate-900 text-white overflow-hidden"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- ヘッダー -->
      <div
        class="mb-14 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="text-xs tracking-[0.5em] uppercase text-sky-400 font-medium mb-3">About</p>
        <h2 class="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">会社概要</h2>
        <div class="w-10 h-0.5 bg-sky-500" />
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <!-- 左: 説明 -->
        <div
          class="transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 100ms"
        >
          <div class="flex items-start gap-4 mb-6">
            <div class="w-1 h-14 bg-gradient-to-b from-sky-500 to-sky-300 rounded-full shrink-0 mt-1" />
            <p class="text-white/80 leading-relaxed text-base md:text-lg">
              {{ cfg.description }}
            </p>
          </div>

          <!-- 強みカード -->
          <div class="space-y-4 mt-10">
            <div
              v-for="(feature, i) in cfg.features"
              :key="feature.title"
              class="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-700"
              :class="revealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'"
              :style="{ transitionDelay: `${(i + 2) * 100}ms` }"
            >
              <div class="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center shrink-0">
                <UIcon :name="feature.icon" class="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <p class="font-semibold text-white text-sm mb-0.5">{{ feature.title }}</p>
                <p class="text-xs text-white/50 leading-relaxed">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右: 会社データテーブル -->
        <div
          class="transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 200ms"
        >
          <div class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <dl class="divide-y divide-white/10">
              <div
                v-for="row in companyData"
                :key="row.label"
                class="flex gap-4 px-6 py-4"
              >
                <dt class="w-24 shrink-0 text-xs font-medium text-sky-400 uppercase tracking-wide pt-0.5">
                  {{ row.label }}
                </dt>
                <dd class="text-sm text-white/80 leading-relaxed flex-1">
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
