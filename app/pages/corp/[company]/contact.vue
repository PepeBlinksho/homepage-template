<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { buildCorpAddress } from '~/config/corp'

const cfg = useCorpConfig()
const prefix = useRoutePrefix()
const { $csrfFetch } = useNuxtApp()

useSeoMeta({
  title: `お問い合わせ | ${cfg.value.name}`,
  description: `${cfg.value.name}へのお問い合わせ・無料お見積りはこちらからどうぞ。`,
  ogTitle: `お問い合わせ | ${cfg.value.name}`,
  ogDescription: `${cfg.value.name}へのお問い合わせ・無料お見積りはこちらからどうぞ。`,
  ogImage: cfg.value.seo.ogImage,
  ogType: 'website',
})

const schema = z.object({
  name: z.string().min(1, 'お名前を入力してください').max(100),
  email: z.string().email('正しいメールアドレスを入力してください').max(254),
  tel: z.string().max(20).optional(),
  message: z.string().min(1, 'お問い合わせ内容を入力してください').max(5000),
  website: z.string().max(0).optional(),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: '',
  email: '',
  tel: '',
  message: '',
  website: '',
})

const submitted = ref(false)
const isSubmitting = ref(false)
const submitError = ref('')

const { el, revealed } = useReveal()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  isSubmitting.value = true
  submitError.value = ''
  try {
    await $csrfFetch('/api/contact', { method: 'POST', body: { ...event.data, _isDemo: true } })
    submitted.value = true
  }
  catch {
    submitError.value = '送信に失敗しました。しばらく経ってから再度お試しいただくか、お電話にてお問い合わせください。'
  }
  finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <CorpHeader />

    <!-- ページヘッダー -->
    <div class="pt-16 relative bg-slate-900 py-20 overflow-hidden">
      <div class="grain-overlay opacity-[0.04]" />
      <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 opacity-80" />
      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <p class="text-xs tracking-[0.5em] uppercase text-sky-400 mb-3">Contact</p>
        <h1 class="font-serif text-5xl md:text-6xl font-semibold text-white mb-4">お問い合わせ</h1>
        <div class="w-12 h-0.5 bg-sky-500" />
        <p class="mt-4 text-slate-400 text-sm">無料お見積り・点検のご依頼もお気軽にどうぞ</p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <!-- 完了メッセージ -->
      <div v-if="submitted" class="max-w-lg mx-auto text-center py-16">
        <div class="w-20 h-20 rounded-full bg-sky-50 flex items-center justify-center mx-auto mb-8">
          <UIcon name="i-heroicons-check-circle" class="w-10 h-10 text-sky-500" />
        </div>
        <h2 class="font-serif text-3xl font-semibold text-slate-900 mb-4">送信が完了しました</h2>
        <p class="text-slate-500 mb-10 leading-relaxed">
          お問い合わせありがとうございます。<br>内容を確認のうえ、2〜3営業日以内にご連絡いたします。
        </p>
        <NuxtLink
          :to="prefix || '/'"
          class="inline-flex items-center gap-2 px-7 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-semibold transition-all duration-200"
        >
          トップページへ戻る
        </NuxtLink>
      </div>

      <div v-else ref="el" class="grid md:grid-cols-5 gap-12 lg:gap-20">
        <!-- 左: 連絡先情報 -->
        <div
          class="md:col-span-2 transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <!-- 電話 -->
          <div class="bg-sky-50 border border-sky-100 rounded-2xl p-6 mb-6">
            <p class="text-xs text-sky-600 font-semibold uppercase tracking-wider mb-2">お電話でも受け付けています</p>
            <a
              :href="`tel:${cfg.tel}`"
              class="font-serif text-2xl font-semibold text-slate-900 hover:text-sky-700 transition-colors flex items-center gap-2"
            >
              <UIcon name="i-heroicons-phone" class="w-6 h-6 text-sky-600" />
              {{ cfg.tel }}
            </a>
            <p class="text-xs text-slate-500 mt-2">
              <template v-for="h in cfg.hours.filter(h => !h.closed)" :key="h.day">
                {{ h.day }} {{ h.time }}<br>
              </template>
            </p>
          </div>

          <h2 class="font-serif text-xl font-semibold text-slate-900 mb-4">メールでのお問い合わせ</h2>
          <p class="text-slate-500 leading-relaxed mb-8 text-sm">
            お見積りのご依頼・ご質問など、お気軽にお問い合わせください。通常2〜3営業日以内にご返信いたします。
          </p>
          <div class="space-y-5">
            <div class="flex items-start gap-4">
              <div class="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-sky-600" />
              </div>
              <div>
                <p class="text-xs text-slate-400 uppercase tracking-wider mb-1">住所</p>
                <p class="text-sm text-slate-700">{{ buildCorpAddress(cfg.address) }}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon name="i-heroicons-envelope" class="w-4 h-4 text-sky-600" />
              </div>
              <div>
                <p class="text-xs text-slate-400 uppercase tracking-wider mb-1">メール</p>
                <a :href="`mailto:${cfg.email}`" class="text-sm text-slate-700 hover:text-sky-600 transition-colors">{{ cfg.email }}</a>
              </div>
            </div>
          </div>
        </div>

        <!-- 右: フォーム -->
        <div
          class="md:col-span-3 transition-all duration-700"
          :class="revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          style="transition-delay: 150ms"
        >
          <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
            <UFormField label="お名前・会社名" name="name" required>
              <UInput v-model="state.name" placeholder="山田 太郎 / 株式会社○○" class="w-full" size="lg" />
            </UFormField>
            <UFormField label="メールアドレス" name="email" required>
              <UInput v-model="state.email" type="email" placeholder="example@email.com" class="w-full" size="lg" />
            </UFormField>
            <UFormField label="電話番号" name="tel" hint="任意">
              <UInput v-model="state.tel" type="tel" placeholder="000-000-0000" class="w-full" size="lg" />
            </UFormField>
            <UFormField label="お問い合わせ内容" name="message" required>
              <UTextarea
                v-model="state.message"
                placeholder="お見積りのご依頼・工事のご相談など、お気軽にご記入ください"
                :rows="6"
                class="w-full"
                size="lg"
              />
            </UFormField>
            <div v-if="submitError" class="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
              <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
              <p>{{ submitError }}</p>
            </div>
            <div aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;" tabindex="-1">
              <input v-model="state.website" type="text" name="website" autocomplete="off">
            </div>
            <button
              type="submit"
              class="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-sky-600 hover:bg-sky-700 disabled:opacity-60 text-white rounded-xl font-semibold text-base transition-all duration-200 shadow-md shadow-sky-200"
              :disabled="isSubmitting"
            >
              <UIcon v-if="isSubmitting" name="i-heroicons-arrow-path" class="w-5 h-5 animate-spin" />
              {{ isSubmitting ? '送信中...' : '送信する' }}
            </button>
          </UForm>
        </div>
      </div>
    </div>

    <CorpFooter />
  </div>
</template>
