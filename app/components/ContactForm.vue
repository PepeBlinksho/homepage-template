<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const props = defineProps<{
  isDemo?: boolean
}>()

const emit = defineEmits<{
  success: []
}>()

const { $csrfFetch } = useNuxtApp()

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

const isSubmitting = ref(false)
const submitError = ref('')

async function onSubmit(event: FormSubmitEvent<Schema>) {
  isSubmitting.value = true
  submitError.value = ''
  try {
    const body = props.isDemo ? { ...event.data, _isDemo: true } : event.data
    await $csrfFetch('/api/contact', { method: 'POST', body })
    emit('success')
  } catch {
    submitError.value = '送信に失敗しました。しばらく経ってから再度お試しいただくか、お電話にてお問い合わせください。'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
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

    <!-- ハニーポット（ボット検知用・人間には非表示） -->
    <div
      aria-hidden="true"
      style="position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;"
      tabindex="-1"
    >
      <input
        v-model="state.website"
        type="text"
        name="website"
        autocomplete="off"
      >
    </div>

    <UButton
      type="submit"
      color="primary"
      size="lg"
      :loading="isSubmitting"
      :disabled="isSubmitting"
      class="w-full justify-center"
    >
      送信する
    </UButton>
  </UForm>
</template>
