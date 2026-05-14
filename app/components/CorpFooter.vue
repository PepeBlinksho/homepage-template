<script setup lang="ts">
import { buildCorpAddress } from '~/config/corp'

const cfg = useCorpConfig()
const prefix = useRoutePrefix()

const currentYear = new Date().getFullYear()

const navLinks = computed(() => {
  const p = prefix.value
  return [
    { label: 'トップ', to: p || '/' },
    { label: '事業内容', to: `${p}/#services` },
    { label: '施工実績', to: `${p}/#works` },
    { label: '会社概要', to: `${p}/#about` },
    { label: 'お問い合わせ', to: `${p}/contact` },
  ]
})
</script>

<template>
  <footer class="bg-slate-950 text-slate-400">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid md:grid-cols-3 gap-10 mb-10">
        <!-- 会社情報 -->
        <div>
          <h3 class="text-xl font-bold text-white mb-2 font-serif">
            {{ cfg.name }}
          </h3>
          <p class="text-sm text-slate-500 leading-relaxed mb-4">
            {{ cfg.catchcopy }}
          </p>
          <a
            :href="`tel:${cfg.tel}`"
            class="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors font-semibold text-sm"
          >
            <UIcon
              name="i-heroicons-phone"
              class="w-4 h-4"
            />
            {{ cfg.tel }}
          </a>
        </div>

        <!-- ナビゲーション -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            メニュー
          </h4>
          <ul class="space-y-2">
            <li
              v-for="link in navLinks"
              :key="link.to"
            >
              <NuxtLink
                :to="link.to"
                class="text-sm text-slate-500 hover:text-white transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 所在地 -->
        <div>
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            所在地・連絡先
          </h4>
          <address class="not-italic text-sm space-y-1 text-slate-500">
            <p>〒{{ cfg.address.zip }}</p>
            <p>{{ buildCorpAddress(cfg.address) }}</p>
            <p class="mt-2">
              TEL:
              <a
                :href="`tel:${cfg.tel}`"
                class="hover:text-white transition-colors"
              >{{ cfg.tel }}</a>
            </p>
            <p>
              <a
                :href="`mailto:${cfg.email}`"
                class="hover:text-white transition-colors"
              >{{ cfg.email }}</a>
            </p>
            <p
              v-if="cfg.license"
              class="text-xs text-slate-600 mt-2"
            >
              {{ cfg.license }}
            </p>
          </address>
        </div>
      </div>

      <!-- コピーライト -->
      <div class="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600">
        <p>© {{ currentYear }} {{ cfg.name }}. All rights reserved.</p>
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
