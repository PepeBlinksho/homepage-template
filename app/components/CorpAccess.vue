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
    class="py-24 md:py-32 bg-slate-50 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-6 sm:px-8">
      <!-- ヘッダー -->
      <div
        class="mb-16 transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="flex items-center gap-4 mb-5">
          <div class="w-8 h-px bg-sky-500" />
          <span class="text-xs tracking-[0.4em] uppercase text-sky-600 font-medium">Contact & Access</span>
        </div>
        <h2 class="font-serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
          お問い合わせ
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-10 items-start">
        <!-- 左: 連絡先 -->
        <div class="space-y-6">
          <!-- 電話CTA（最重要） -->
          <div
            class="relative overflow-hidden rounded-3xl bg-slate-900 p-8 md:p-10 transition-all duration-700"
            :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 100ms"
          >
            <!-- 背景デコ -->
            <div class="absolute top-0 right-0 w-48 h-48 bg-sky-600/10 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />

            <p class="text-xs tracking-widest uppercase text-sky-400 font-medium mb-3">
              お電話でのご相談
            </p>
            <a
              :href="`tel:${cfg.tel}`"
              class="group flex items-center gap-4 mb-4 hover:opacity-90 transition-opacity"
            >
              <div class="w-14 h-14 rounded-2xl bg-sky-600 flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors">
                <UIcon
                  name="i-heroicons-phone"
                  class="w-7 h-7 text-white"
                />
              </div>
              <span class="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide">
                {{ cfg.tel }}
              </span>
            </a>
            <p class="text-sm text-slate-500">
              受付時間：
              <span
                v-for="h in cfg.hours.filter(h => !h.closed)"
                :key="h.day"
                class="mr-3"
              >{{ h.day }} {{ h.time }}</span>
            </p>
          </div>

          <!-- メール・フォーム -->
          <div
            class="rounded-3xl bg-white border border-slate-100 p-8 transition-all duration-700"
            :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 200ms"
          >
            <p class="text-xs tracking-widest uppercase text-slate-400 font-semibold mb-5">
              メール・フォーム
            </p>
            <a
              :href="`mailto:${cfg.email}`"
              class="text-sky-600 hover:text-sky-800 font-medium text-sm transition-colors block mb-5"
            >
              {{ cfg.email }}
            </a>
            <NuxtLink
              :to="`${prefix}/contact`"
              class="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-semibold text-sm transition-all duration-200 shadow-md shadow-sky-200"
            >
              <UIcon
                name="i-heroicons-pencil-square"
                class="w-4 h-4"
              />
              お問い合わせフォームへ
              <UIcon
                name="i-heroicons-arrow-right"
                class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </NuxtLink>
          </div>

          <!-- 営業時間 -->
          <div
            class="rounded-3xl bg-white border border-slate-100 p-8 transition-all duration-700"
            :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 300ms"
          >
            <p class="text-xs tracking-widest uppercase text-slate-400 font-semibold mb-5">
              営業時間
            </p>
            <table class="w-full">
              <tbody class="divide-y divide-slate-100">
                <tr
                  v-for="hour in cfg.hours"
                  :key="hour.day"
                >
                  <td class="py-3 pr-4 text-sm text-slate-500 w-28 font-medium">
                    {{ hour.day }}
                  </td>
                  <td
                    class="py-3 text-sm font-semibold"
                    :class="hour.closed ? 'text-red-500' : 'text-slate-900'"
                  >
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
          <div class="relative h-80 md:h-[440px] rounded-3xl overflow-hidden shadow-sm border border-slate-200">
            <iframe
              :src="cfg.googleMapEmbed"
              class="w-full h-full border-0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              :title="`${cfg.name}の地図`"
            />
          </div>
          <div class="bg-white rounded-2xl px-6 py-5 border border-slate-100 flex items-start justify-between gap-4">
            <div>
              <p class="text-xs text-slate-400 uppercase tracking-wider mb-1.5 font-medium">
                所在地
              </p>
              <p class="text-sm text-slate-800 font-semibold leading-relaxed">
                〒{{ cfg.address.zip }}<br>
                {{ buildCorpAddress(cfg.address) }}
              </p>
            </div>
            <a
              :href="googleMapsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="shrink-0 inline-flex items-center gap-1.5 text-xs text-sky-600 hover:text-sky-800 font-semibold transition-colors"
            >
              <UIcon
                name="i-heroicons-map-pin"
                class="w-4 h-4"
              />
              マップで開く
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
