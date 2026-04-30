<script setup lang="ts">
import { siteConfig, buildFullAddress } from '~/config/site'

const { el, revealed } = useReveal()
const googleMapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(buildFullAddress(siteConfig.address))}`
</script>

<template>
  <section
    id="access"
    ref="el"
    class="py-12 md:py-14 bg-white overflow-hidden flex flex-col justify-center h-full"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- セクションヘッダー -->
      <div
        class="transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <SectionHeader
          label="Access"
          title="アクセス"
        />
      </div>

      <!-- レイアウト -->
      <div class="grid md:grid-cols-2 gap-10 items-start">
        <!-- 左：営業時間・住所・電話 -->
        <div class="space-y-8">
          <!-- 営業時間 -->
          <div
            class="transition-all duration-700"
            :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 100ms"
          >
            <h3 class="flex items-center gap-2 text-sm font-semibold text-stone-400 uppercase tracking-widest mb-4">
              <UIcon
                name="i-heroicons-clock"
                class="w-4 h-4"
              />
              営業時間
            </h3>
            <table class="w-full">
              <tbody class="divide-y divide-stone-100">
                <tr
                  v-for="hour in siteConfig.hours"
                  :key="hour.day"
                >
                  <td class="py-2.5 pr-4 text-sm text-stone-500 w-32">
                    {{ hour.day }}
                  </td>
                  <td
                    class="py-2.5 text-sm font-medium"
                    :class="hour.closed ? 'text-red-500' : 'text-stone-800'"
                  >
                    {{ hour.time }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 住所 -->
          <div
            class="transition-all duration-700"
            :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 200ms"
          >
            <h3 class="flex items-center gap-2 text-sm font-semibold text-stone-400 uppercase tracking-widest mb-4">
              <UIcon
                name="i-heroicons-map-pin"
                class="w-4 h-4"
              />
              住所
            </h3>
            <address class="not-italic text-stone-800 space-y-1 text-sm">
              <p class="text-stone-400">〒{{ siteConfig.address.zip }}</p>
              <p class="text-base font-medium">
                {{ buildFullAddress(siteConfig.address) }}
              </p>
              <p
                v-if="siteConfig.address.building"
                class="text-stone-500"
              >
                {{ siteConfig.address.building }}
              </p>
            </address>
          </div>

          <!-- 電話番号 -->
          <div
            class="transition-all duration-700"
            :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 300ms"
          >
            <h3 class="flex items-center gap-2 text-sm font-semibold text-stone-400 uppercase tracking-widest mb-4">
              <UIcon
                name="i-heroicons-phone"
                class="w-4 h-4"
              />
              電話番号
            </h3>
            <a
              :href="`tel:${siteConfig.tel}`"
              class="font-serif text-2xl font-medium text-stone-900 hover:text-amber-600 transition-colors"
            >
              {{ siteConfig.tel }}
            </a>
          </div>

          <!-- Googleマップボタン -->
          <div
            class="transition-all duration-700"
            :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
            style="transition-delay: 400ms"
          >
            <UButton
              :to="googleMapsUrl"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              variant="solid"
              icon="i-heroicons-map-pin"
              external
            >
              Googleマップで開く
            </UButton>
          </div>
        </div>

        <!-- 右：Googleマップ -->
        <div
          class="relative h-64 md:h-80 lg:h-[360px] rounded-3xl overflow-hidden shadow-sm transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 150ms"
        >
          <iframe
            :src="siteConfig.googleMapEmbed"
            class="w-full h-full border-0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            :title="`${siteConfig.name}の地図`"
          />
        </div>
      </div>
    </div>
  </section>
</template>
