<script setup lang="ts">
import { buildFullAddress } from '~/config/site'

const siteConfig = useShopConfig()

useSeoMeta({
  title: `プライバシーポリシー | ${siteConfig.value.name}`,
  description: `${siteConfig.value.name}のプライバシーポリシーです。`,
  ogTitle: `プライバシーポリシー | ${siteConfig.value.name}`,
  ogDescription: `${siteConfig.value.name}のプライバシーポリシーです。`,
  ogImage: siteConfig.value.seo.ogImage,
  ogType: 'website',
})
useCanonical()

const sections = [
  {
    title: '個人情報の収集について',
    body: `当サイトでは、お問い合わせフォームのご利用時に、お名前・メールアドレス・電話番号などの個人情報をご提供いただく場合があります。収集した個人情報は、お問い合わせへの回答および当店からのご連絡にのみ使用いたします。`,
  },
  {
    title: '個人情報の第三者提供について',
    body: `当店は、法令に基づく場合を除き、ご本人の同意なしに個人情報を第三者に提供することはありません。`,
  },
  {
    title: '個人情報の管理について',
    body: `収集した個人情報は、不正アクセス・紛失・破壊・改ざん・漏洩などを防ぐため、適切な安全管理措置を講じます。保存期間は目的達成後、速やかに削除いたします。`,
  },
  {
    title: 'アクセス解析について',
    body: `当サイトでは、サービス改善を目的としてアクセス解析ツールを使用する場合があります。このツールはCookieを使用してアクセス情報を収集しますが、個人を特定する情報は収集しておりません。`,
  },
  {
    title: 'お問い合わせ・開示請求について',
    body: `個人情報の開示・訂正・削除・利用停止をご希望の場合は、以下の連絡先までお申し出ください。ご本人確認のうえ、合理的な範囲で対応いたします。`,
  },
  {
    title: 'プライバシーポリシーの変更について',
    body: `当店は、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、当サイトに掲載した時点から適用されます。`,
  },
]

const { el, revealed } = useReveal()
</script>

<template>
  <div class="pt-16 min-h-screen bg-white">
    <!-- ページヘッダー -->
    <div class="relative bg-stone-900 py-24 overflow-hidden">
      <div class="grain-overlay opacity-[0.04]" />
      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <p class="text-xs tracking-[0.5em] uppercase text-amber-400 mb-3">
          Privacy Policy
        </p>
        <h1 class="font-serif text-5xl md:text-6xl font-semibold text-white">
          プライバシーポリシー
        </h1>
        <div class="w-12 h-0.5 bg-amber-500 mt-4" />
      </div>
    </div>

    <!-- 本文 -->
    <div
      ref="el"
      class="max-w-2xl mx-auto px-4 sm:px-6 py-20"
    >
      <div
        class="transition-all duration-700"
        :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
      >
        <p class="text-stone-500 text-sm leading-relaxed mb-12">
          {{ siteConfig.name }}（以下「当店」）は、お客様の個人情報の保護を重要事項と考え、以下のプライバシーポリシーを定めます。
        </p>

        <div class="space-y-10">
          <section
            v-for="(section, i) in sections"
            :key="i"
          >
            <h2 class="font-serif text-lg font-semibold text-stone-900 mb-3">
              {{ i + 1 }}. {{ section.title }}
            </h2>
            <p class="text-stone-600 text-sm leading-relaxed">
              {{ section.body }}
            </p>
          </section>
        </div>

        <!-- 連絡先 -->
        <div class="mt-12 p-6 bg-stone-50 rounded-2xl">
          <h2 class="font-serif text-lg font-semibold text-stone-900 mb-4">
            お問い合わせ先
          </h2>
          <address class="not-italic text-sm text-stone-600 space-y-1">
            <p class="font-medium text-stone-900">
              {{ siteConfig.name }}
            </p>
            <p>〒{{ siteConfig.address.zip }} {{ buildFullAddress(siteConfig.address) }}</p>
            <p>TEL: <a :href="`tel:${siteConfig.tel}`" class="hover:text-amber-600 transition-colors">{{ siteConfig.tel }}</a></p>
            <p>Email: <a :href="`mailto:${siteConfig.email}`" class="hover:text-amber-600 transition-colors">{{ siteConfig.email }}</a></p>
          </address>
        </div>

        <p class="mt-8 text-xs text-stone-400 text-right">
          制定日：{{ siteConfig.privacyPolicyDate }}
        </p>
      </div>
    </div>
  </div>
</template>
