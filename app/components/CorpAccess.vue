<script setup lang="ts">
import { buildCorpAddress } from '~/config/corp'

const cfg = useCorpConfig()
const prefix = useRoutePrefix()
const { el, revealed } = useReveal()

const googleMapsUrl = computed(() =>
  `https://maps.google.com/maps?q=${encodeURIComponent(buildCorpAddress(cfg.value.address))}`,
)
</script>

<template>
  <section
    id="access"
    ref="el"
    class="py-20 md:py-24 bg-slate-50"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- ヘッダー -->
      <div
        class="mb-14 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="text-xs tracking-[0.5em] uppercase text-sky-600 font-medium mb-3">Contact & Access</p>
        <h2 class="font-serif text-4xl md:text-5xl font-semibold text-slate-900 mb-4">お問い合わせ・アクセス</h2>
        <div class="w-10 h-0.5 bg-sky-500" />
      </div>

      <div class="grid md:grid-cols-2 gap-10 items-start">
        <!-- 左: 連絡先情報 -->
        <div class="space-y-8">
          <!-- 電話番号（目立たせる） -->
          <div
            class="bg-sky-600 rounded-2xl p-7 text-white transition-all duration-700"
            :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 100ms"
          >
            <p class="text-xs tracking-widest uppercase text-sky-200 font-medium mb-2">お電話でのご相談</p>
            <a
              :href="`tel:${cfg.tel}`"
              class="font-serif text-3xl md:text-4xl font-semibold tracking-wide hover:text-sky-100 transition-colors flex items-center gap-3"
            >
              <UIcon name="i-heroicons-phone" class="w-8 h-8 shrink-0" />
              {{ cfg.tel }}
            </a>
            <p class="text-sm text-sky-200 mt-2">
              受付時間：
              <span v-for="(h, i) in cfg.hours.filter(h => !h.closed)" :key="h.day">
                {{ i > 0 ? '　' : '' }}{{ h.day }} {{ h.time }}
              </span>
            </p>
          </div>

          <!-- メール -->
          <div
            class="bg-white rounded-2xl p-6 border border-slate-100 transition-all duration-700"
            :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 200ms"
          >
            <h3 class="flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
              <UIcon name="i-heroicons-envelope" class="w-4 h-4" />
              メール・フォームでのご相談
            </h3>
            <a
              :href="`mailto:${cfg.email}`"
              class="text-sky-600 hover:text-sky-800 transition-colors text-sm font-medium"
            >
              {{ cfg.email }}
            </a>
            <div class="mt-4">
              <NuxtLink
                :to="`${prefix}/contact`"
                class="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-semibold transition-all duration-200"
              >
                <UIcon name="i-heroicons-pencil-square" class="w-4 h-4" />
                お問い合わせフォームへ
              </NuxtLink>
            </div>
          </div>

          <!-- 営業時間 -->
          <div
            class="transition-all duration-700"
            :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 300ms"
          >
            <h3 class="flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
              <UIcon name="i-heroicons-clock" class="w-4 h-4" />
              営業時間
            </h3>
            <table class="w-full">
              <tbody class="divide-y divide-slate-100">
                <tr v-for="hour in cfg.hours" :key="hour.day">
                  <td class="py-2.5 pr-4 text-sm text-slate-500 w-28">{{ hour.day }}</td>
                  <td class="py-2.5 text-sm font-medium" :class="hour.closed ? 'text-red-500' : 'text-slate-800'">
                    {{ hour.time }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 右: 地図 -->
        <div
          class="space-y-4 transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 150ms"
        >
          <div class="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <iframe
              :src="cfg.googleMapEmbed"
              class="w-full h-full border-0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              :title="`${cfg.name}の地図`"
            />
          </div>
          <div class="bg-white rounded-xl px-5 py-4 border border-slate-100">
            <p class="text-xs text-slate-400 uppercase tracking-wider mb-1">所在地</p>
            <p class="text-sm text-slate-700 font-medium">
              〒{{ cfg.address.zip }}<br>
              {{ buildCorpAddress(cfg.address) }}
            </p>
            <a
              :href="googleMapsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 mt-3 text-sm text-sky-600 hover:text-sky-800 transition-colors font-medium"
            >
              <UIcon name="i-heroicons-map-pin" class="w-4 h-4" />
              Googleマップで開く
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
