<script setup lang="ts">
const cfg = useCorpConfig()
const prefix = useRoutePrefix()

useSeoMeta({
  title: `プライバシーポリシー | ${cfg.value.name}`,
  description: `${cfg.value.name}のプライバシーポリシーです。`,
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <CorpHeader />

    <div class="pt-16 max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <h1 class="font-serif text-4xl font-semibold text-slate-900 mb-2">プライバシーポリシー</h1>
      <p class="text-sm text-slate-400 mb-10">制定日: {{ cfg.privacyPolicyDate }}</p>

      <div class="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm leading-relaxed">
        <section>
          <h2 class="font-semibold text-base text-slate-900 mb-3">個人情報の取扱いについて</h2>
          <p>{{ cfg.name }}（以下「当社」）は、お客様の個人情報の保護に努め、以下の方針に従って適切に取り扱います。</p>
        </section>

        <section>
          <h2 class="font-semibold text-base text-slate-900 mb-3">収集する個人情報</h2>
          <p>当社では、お問い合わせ・お見積りのご依頼の際に、氏名・会社名・メールアドレス・電話番号などの情報をご提供いただく場合があります。</p>
        </section>

        <section>
          <h2 class="font-semibold text-base text-slate-900 mb-3">利用目的</h2>
          <ul class="list-disc list-inside space-y-1 pl-2">
            <li>お問い合わせへの返答・お見積りのご提示</li>
            <li>工事のご提案・契約に関するご連絡</li>
            <li>サービスに関する情報のご提供</li>
          </ul>
        </section>

        <section>
          <h2 class="font-semibold text-base text-slate-900 mb-3">第三者提供</h2>
          <p>当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。</p>
        </section>

        <section>
          <h2 class="font-semibold text-base text-slate-900 mb-3">個人情報の管理</h2>
          <p>収集した個人情報は厳重に管理し、不正アクセス・紛失・漏洩の防止に努めます。</p>
        </section>

        <section>
          <h2 class="font-semibold text-base text-slate-900 mb-3">お問い合わせ</h2>
          <p>個人情報の取扱いに関するお問い合わせは、以下の連絡先までお願いします。</p>
          <address class="not-italic mt-3 space-y-1">
            <p>{{ cfg.name }}</p>
            <p>TEL: <a :href="`tel:${cfg.tel}`" class="text-sky-600 hover:underline">{{ cfg.tel }}</a></p>
            <p>Email: <a :href="`mailto:${cfg.email}`" class="text-sky-600 hover:underline">{{ cfg.email }}</a></p>
          </address>
        </section>
      </div>

      <div class="mt-12">
        <NuxtLink
          :to="prefix || '/'"
          class="inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-800 transition-colors font-medium"
        >
          <UIcon name="i-heroicons-arrow-left" class="w-4 h-4" />
          トップページへ戻る
        </NuxtLink>
      </div>
    </div>

    <CorpFooter />
  </div>
</template>
