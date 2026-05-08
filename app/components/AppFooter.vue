<script setup lang="ts">
import { buildFullAddress } from '~/config/site'

const siteConfig = useShopConfig()
const prefix = useRoutePrefix()

type SnsLink = { key: string; url: string; icon: string; label: string }

const snsLinks = computed<SnsLink[]>(() =>
  [
    { key: 'instagram', url: siteConfig.value.sns.instagram, icon: 'i-simple-icons-instagram', label: 'Instagram' },
    { key: 'twitter', url: siteConfig.value.sns.twitter, icon: 'i-simple-icons-x', label: 'X (Twitter)' },
    { key: 'facebook', url: siteConfig.value.sns.facebook, icon: 'i-simple-icons-facebook', label: 'Facebook' },
    { key: 'line', url: siteConfig.value.sns.line, icon: 'i-simple-icons-line', label: 'LINE' },
  ].filter(s => s.url !== ''),
)

const navLinks = computed(() => {
  const p = prefix.value
  return [
    { label: 'トップ', to: p || '/' },
    { label: 'メニュー', to: `${p}/menu` },
    { label: 'お知らせ', to: `${p}/news` },
    { label: 'アクセス', to: `${p}/#access` },
    { label: 'お問い合わせ', to: `${p}/contact` },
  ]
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-stone-900 text-stone-300 pb-20 md:pb-0">
    <!-- ブランドゾーン -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p class="font-serif leading-none tracking-tight text-white" style="font-size: clamp(48px, 8vw, 92px)">
            {{ siteConfig.name }}
          </p>
          <p class="mt-3 text-stone-400 italic text-base">
            "{{ siteConfig.catchcopy }}"
          </p>
        </div>
        <div
          v-if="snsLinks.length > 0"
          class="flex items-center gap-5"
        >
          <a
            v-for="sns in snsLinks"
            :key="sns.key"
            :href="sns.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="sns.label"
            class="text-stone-500 hover:text-white transition-colors"
          >
            <UIcon :name="sns.icon" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-stone-800 mx-4 sm:mx-6" />

    <!-- 情報グリッド -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <!-- 所在地・連絡先 -->
        <div>
          <h4 class="text-[10px] font-semibold text-stone-600 uppercase tracking-[0.2em] mb-4">
            所在地・連絡先
          </h4>
          <address class="not-italic text-sm space-y-2 text-stone-400">
            <p class="text-stone-600 text-xs">〒{{ siteConfig.address.zip }}</p>
            <p class="text-stone-300">
              {{ buildFullAddress(siteConfig.address) }}
            </p>
            <p>
              <a
                :href="`tel:${siteConfig.tel}`"
                class="hover:text-white transition-colors"
              >TEL: {{ siteConfig.tel }}</a>
            </p>
            <p>
              <a
                :href="`mailto:${siteConfig.email}`"
                class="hover:text-white transition-colors break-all"
              >{{ siteConfig.email }}</a>
            </p>
          </address>
        </div>

        <!-- 営業時間 -->
        <div>
          <h4 class="text-[10px] font-semibold text-stone-600 uppercase tracking-[0.2em] mb-4">
            営業時間
          </h4>
          <ul class="text-sm space-y-2.5">
            <li
              v-for="hour in siteConfig.hours"
              :key="hour.day"
              class="flex justify-between gap-4"
            >
              <span class="text-stone-400">{{ hour.day }}</span>
              <span :class="hour.closed ? 'text-red-400/70' : 'text-stone-300'">{{ hour.time }}</span>
            </li>
          </ul>
        </div>

        <!-- ナビゲーション -->
        <div>
          <h4 class="text-[10px] font-semibold text-stone-600 uppercase tracking-[0.2em] mb-4">
            ナビゲーション
          </h4>
          <nav>
            <ul class="space-y-2.5">
              <li
                v-for="link in navLinks"
                :key="link.to"
              >
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-stone-400 hover:text-white transition-colors"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <!-- ボトムバー -->
    <div class="border-t border-stone-800/60 mx-4 sm:mx-6">
      <div class="max-w-6xl mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
        <p>© {{ currentYear }} {{ siteConfig.name }}. All rights reserved.</p>
        <NuxtLink
          :to="`${prefix}/privacy`"
          class="hover:text-stone-400 transition-colors"
        >
          プライバシーポリシー
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
