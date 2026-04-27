<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { siteConfig } from '~/config/site'

useSeoMeta({
  title: `お問い合わせ | ${siteConfig.name}`,
  description: `${siteConfig.name}へのお問い合わせはこちらからどうぞ。`,
  ogTitle: `お問い合わせ | ${siteConfig.name}`,
  ogDescription: `${siteConfig.name}へのお問い合わせはこちらからどうぞ。`,
  ogImage: siteConfig.seo.ogImage,
  ogType: 'website',
})
useCanonical()

const schema = z.object({
  name: z.string().min(1, 'お名前を入力してください'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  tel: z.string().optional(),
  message: z.string().min(1, 'お問い合わせ内容を入力してください'),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: '',
  email: '',
  tel: '',
  message: '',
})

const submitted = ref(false)
const isSubmitting = ref(false)
const submitError = ref('')

const { el, revealed } = useReveal()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  isSubmitting.value = true
  submitError.value = ''
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: event.data,
    })
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
          to="/"
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
                  {{ siteConfig.address.full }}
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
          <UForm
            :schema="schema"
            :state="state"
            class="space-y-6"
            @submit="onSubmit"
          >
            <UFormField
              label="お名前"
              name="name"
              required
            >
              <UInput
                v-model="state.name"
                placeholder="山田 太郎"
                class="w-full"
                size="lg"
              />
            </UFormField>

            <UFormField
              label="メールアドレス"
              name="email"
              required
            >
              <UInput
                v-model="state.email"
                type="email"
                placeholder="example@email.com"
                class="w-full"
                size="lg"
              />
            </UFormField>

            <UFormField
              label="電話番号"
              name="tel"
              hint="任意"
            >
              <UInput
                v-model="state.tel"
                type="tel"
                placeholder="000-000-0000"
                class="w-full"
                size="lg"
              />
            </UFormField>

            <UFormField
              label="お問い合わせ内容"
              name="message"
              required
            >
              <UTextarea
                v-model="state.message"
                placeholder="お問い合わせ内容をご記入ください"
                :rows="6"
                class="w-full"
                size="lg"
              />
            </UFormField>

            <!-- エラーメッセージ -->
            <div
              v-if="submitError"
              class="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700"
            >
              <UIcon
                name="i-heroicons-exclamation-triangle"
                class="w-5 h-5 shrink-0 mt-0.5 text-red-500"
              />
              <p>{{ submitError }}</p>
            </div>

            <UButton
              type="submit"
              color="primary"
              size="lg"
              :loading="isSubmitting"
              class="w-full justify-center"
            >
              送信する
            </UButton>
          </UForm>
        </div>
      </div>
    </div>
  </div>
</template>
