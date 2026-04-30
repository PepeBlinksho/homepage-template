<script setup lang="ts">
import type { NuxtError } from '#app'
import { siteConfig } from '~/config/site'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error.statusCode === 404)

useHead({ title: `${is404.value ? '404 - ページが見つかりません' : 'エラーが発生しました'} | ${siteConfig.name}` })

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- ヘッダー（簡易版） -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center">
        <NuxtLink to="/" class="font-serif text-lg font-semibold text-stone-900 tracking-wide">
          {{ siteConfig.name }}
        </NuxtLink>
      </div>
    </header>

    <!-- エラーコンテンツ -->
    <main class="flex-1 flex items-center justify-center px-4 pt-16">
      <div class="text-center max-w-lg">
        <!-- エラーコード -->
        <p class="font-serif text-[10rem] md:text-[14rem] font-semibold leading-none text-stone-100 select-none">
          {{ error.statusCode }}
        </p>

        <!-- タイトル -->
        <h1 class="font-serif text-2xl md:text-3xl font-semibold text-stone-900 -mt-8 mb-4">
          {{ is404 ? 'ページが見つかりません' : 'エラーが発生しました' }}
        </h1>

        <!-- 区切り -->
        <div class="w-12 h-0.5 bg-amber-500 mx-auto mb-6" />

        <!-- 説明 -->
        <p class="text-stone-500 text-sm leading-relaxed mb-10">
          <template v-if="is404">
            お探しのページは移動・削除されたか、URLが正しくない可能性があります。
          </template>
          <template v-else>
            予期せぬエラーが発生しました。しばらく時間をおいてから再度アクセスしてください。
          </template>
        </p>

        <!-- ボタン -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <UButton
            size="lg"
            color="primary"
            icon="i-heroicons-home"
            @click="handleError"
          >
            トップページへ戻る
          </UButton>
          <UButton
            to="/contact"
            size="lg"
            variant="outline"
            color="neutral"
            icon="i-heroicons-envelope"
          >
            お問い合わせ
          </UButton>
        </div>
      </div>
    </main>
  </div>
</template>
