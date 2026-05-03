<script setup lang="ts">
import { buildFullAddress } from '~/config/site'

const siteConfig = useShopConfig()
const prefix = useRoutePrefix()

type SnsLink = {
  key: string
  url: string
  icon: string
  label: string
}

const snsLinks = computed<SnsLink[]>(() =>
  [
    { key: 'instagram', url: siteConfig.value.sns.instagram, icon: 'i-simple-icons-instagram', label: 'Instagram' },
    { key: 'twitter', url: siteConfig.value.sns.twitter, icon: 'i-simple-icons-x', label: 'X (Twitter)' },
    { key: 'facebook', url: siteConfig.value.sns.facebook, icon: 'i-simple-icons-facebook', label: 'Facebook' },
    { key: 'line', url: siteConfig.value.sns.line, icon: 'i-simple-icons-line', label: 'LINE' },
  ].filter(s => s.url !== ''),
)

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-stone-900 text-stone-300">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- 店舗情報 -->
        <div>
          <h3 class="text-xl font-bold text-white mb-2">
            {{ siteConfig.name }}
          </h3>
          <p class="text-sm text-stone-400">
            {{ siteConfig.catchcopy }}
          </p>
        </div>

        <!-- 住所・連絡先 -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-3">
            所在地・連絡先
          </h4>
          <address class="not-italic text-sm space-y-1 text-stone-400">
            <p>〒{{ siteConfig.address.zip }}</p>
            <p>{{ buildFullAddress(siteConfig.address) }}</p>
            <p>
              TEL:
              <a
                :href="`tel:${siteConfig.tel}`"
                class="hover:text-white transition-colors"
              >{{ siteConfig.tel }}</a>
            </p>
            <p>
              <a
                :href="`mailto:${siteConfig.email}`"
                class="hover:text-white transition-colors"
              >{{ siteConfig.email }}</a>
            </p>
          </address>
        </div>

        <!-- 営業時間 -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-3">
            営業時間
          </h4>
          <ul class="text-sm space-y-1 text-stone-400">
            <li
              v-for="hour in siteConfig.hours"
              :key="hour.day"
              class="flex justify-between gap-4"
            >
              <span>{{ hour.day }}</span>
              <span :class="hour.closed ? 'text-red-400' : ''">{{ hour.time }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- SNSアイコン -->
      <div
        v-if="snsLinks.length > 0"
        class="flex gap-5 mb-8"
      >
        <a
          v-for="sns in snsLinks"
          :key="sns.key"
          :href="sns.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="sns.label"
          class="text-stone-400 hover:text-white transition-colors"
        >
          <UIcon
            :name="sns.icon"
            class="w-5 h-5"
          />
        </a>
      </div>

      <!-- コピーライト・プライバシーポリシー -->
      <div class="border-t border-stone-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-stone-500">
        <p>© {{ currentYear }} {{ siteConfig.name }}. All rights reserved.</p>
        <NuxtLink
          :to="`${prefix}/privacy`"
          class="hover:text-white transition-colors"
        >
          プライバシーポリシー
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
