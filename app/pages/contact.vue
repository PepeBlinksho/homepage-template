<script setup lang="ts">
import { buildFullAddress } from '~/config/site'

const siteConfig = useShopConfig()
const prefix = useRoutePrefix()

useSeoMeta({
  title: `お問い合わせ | ${siteConfig.value.name}`,
  description: `${siteConfig.value.name}へのお問い合わせはこちらからどうぞ。`,
  ogTitle: `お問い合わせ | ${siteConfig.value.name}`,
  ogDescription: `${siteConfig.value.name}へのお問い合わせはこちらからどうぞ。`,
  ogImage: siteConfig.value.seo.ogImage,
  ogType: 'website',
})
useCanonical()

const submitted = ref(false)
const { el, revealed } = useReveal()
</script>

<template>
  <div class="pt-16 min-h-screen bg-white">
    <!-- ページヘッダー -->
    <div class="relative bg-stone-900 py-24 overflow-hidden">
      <div class="grain-overlay opacity-[0.04]" />
      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <p class="text-xs tracking-[0.5em] uppercase text-amber-400 mb-3">
          Contact
        </p>
        <h1 class="font-serif text-5xl md:text-6xl font-semibold text-white">
          お問い合わせ
        </h1>
        <div class="w-12 h-0.5 bg-amber-500 mt-4" />
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <!-- 送信完了 -->
      <div
        v-if="submitted"
        class="max-w-lg mx-auto text-center py-16"
      >
        <div class="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-8">
          <UIcon
            name="i-heroicons-check-circle"
            class="w-10 h-10 text-amber-500"
          />
        </div>
        <h2 class="font-serif text-3xl font-semibold text-stone-900 mb-4">
          送信が完了しました
        </h2>
        <p class="text-stone-500 mb-10 leading-relaxed">
          お問い合わせありがとうございます。<br>
          内容を確認のうえ、ご連絡いたします。
        </p>
        <UButton
          :to="prefix || '/'"
          color="primary"
          size="lg"
        >
          トップページへ戻る
        </UButton>
      </div>

      <!-- フォームレイアウト（左：info, 右：form） -->
      <div
        v-else
        ref="el"
        class="grid md:grid-cols-5 gap-12 lg:gap-20"
      >
        <!-- 左：店舗情報 -->
        <div
          class="md:col-span-2 transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <h2 class="font-serif text-2xl font-semibold text-stone-900 mb-6">
            お気軽にどうぞ
          </h2>
          <p class="text-stone-500 leading-relaxed mb-10 text-sm">
            ご質問・ご予約・その他何でもお気軽にお問い合わせください。
            通常2〜3営業日以内にご返信いたします。
          </p>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="w-4 h-4 text-amber-600"
                />
              </div>
              <div>
                <p class="text-xs text-stone-400 uppercase tracking-wider mb-1">
                  住所
                </p>
                <p class="text-sm text-stone-700">
                  {{ buildFullAddress(siteConfig.address) }}
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon
                  name="i-heroicons-phone"
                  class="w-4 h-4 text-amber-600"
                />
              </div>
              <div>
                <p class="text-xs text-stone-400 uppercase tracking-wider mb-1">
                  電話
                </p>
                <a
                  :href="`tel:${siteConfig.tel}`"
                  class="text-sm text-stone-700 hover:text-amber-600 transition-colors"
                >{{ siteConfig.tel }}</a>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon
                  name="i-heroicons-envelope"
                  class="w-4 h-4 text-amber-600"
                />
              </div>
              <div>
                <p class="text-xs text-stone-400 uppercase tracking-wider mb-1">
                  メール
                </p>
                <a
                  :href="`mailto:${siteConfig.email}`"
                  class="text-sm text-stone-700 hover:text-amber-600 transition-colors"
                >{{ siteConfig.email }}</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 右：フォーム -->
        <div
          class="md:col-span-3 transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 150ms"
        >
          <ContactForm @success="submitted = true" />
        </div>
      </div>
    </div>
  </div>
</template>
