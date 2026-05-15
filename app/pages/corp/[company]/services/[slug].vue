<script setup lang="ts">
const cfg = useCorpConfig()
const prefix = useRoutePrefix()
const route = useRoute()
const theme = computed(() => cfg.value.theme ?? 'amber')

const slug = computed(() => route.params.slug as string)
const service = computed(() => cfg.value.services.find(s => s.slug === slug.value))

watchEffect(() => {
  if (!service.value) {
    throw createError({ statusCode: 404, statusMessage: 'Service not found' })
  }
})

useSeoMeta({
  title: computed(() => `${service.value?.title ?? ''} | ${cfg.value.seo.title}`),
  description: computed(() => service.value?.description ?? ''),
})
</script>

<template>
  <div :data-theme="theme">
    <CorpHeader />
    <main class="min-h-screen bg-white pt-16">
      <!-- ページヒーロー -->
      <div class="bg-slate-950 py-20 md:py-28 relative overflow-hidden">
        <div
          class="absolute inset-0 opacity-[0.04]"
          style="background-image: linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px); background-size: 72px 72px;"
        />
        <div class="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <!-- パンくず -->
          <nav class="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <NuxtLink
              :to="prefix || '/'"
              class="hover:text-slate-300 transition-colors"
            >
              トップ
            </NuxtLink>
            <UIcon
              name="i-heroicons-chevron-right"
              class="w-3.5 h-3.5 text-slate-600"
            />
            <NuxtLink
              :to="`${prefix}/#services`"
              class="hover:text-slate-300 transition-colors"
            >
              事業内容
            </NuxtLink>
            <UIcon
              name="i-heroicons-chevron-right"
              class="w-3.5 h-3.5 text-slate-600"
            />
            <span class="text-slate-300">{{ service?.title }}</span>
          </nav>

          <div class="flex items-center gap-4 mb-5">
            <div class="w-8 h-px bg-sky-500" />
            <span class="text-xs tracking-[0.4em] uppercase text-sky-400 font-medium">Services</span>
          </div>
          <div class="flex items-start gap-6">
            <div class="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0 mt-1">
              <UIcon
                :name="service?.icon ?? 'i-heroicons-cube'"
                class="w-7 h-7 text-sky-400"
              />
            </div>
            <div>
              <h1 class="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {{ service?.title }}
              </h1>
              <p class="text-slate-400 text-lg leading-relaxed max-w-2xl">
                {{ service?.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 商品グリッド -->
      <div class="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div
          v-if="service?.products?.length"
          class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div
            v-for="product in service.products"
            :key="product.name"
            class="group rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-50 transition-all duration-300 overflow-hidden bg-white"
          >
            <!-- 画像エリア -->
            <div class="relative h-52 bg-slate-50 overflow-hidden">
              <NuxtImg
                v-if="product.image"
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                format="webp"
                quality="80"
              />
              <!-- 画像なし時のプレースホルダー -->
              <div
                v-else
                class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50"
              >
                <div class="text-center">
                  <UIcon
                    name="i-heroicons-photo"
                    class="w-10 h-10 text-slate-300 mx-auto mb-2"
                  />
                  <span class="text-xs text-slate-400 font-medium tracking-wide">商品画像</span>
                </div>
              </div>
            </div>

            <!-- テキスト -->
            <div class="p-6">
              <h3 class="font-bold text-lg text-slate-900 mb-2 leading-snug">
                {{ product.name }}
              </h3>
              <p class="text-sm text-slate-500 leading-relaxed">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>

        <div
          v-else
          class="text-center py-20 text-slate-400"
        >
          <UIcon
            name="i-heroicons-cube"
            class="w-12 h-12 mx-auto mb-4 text-slate-300"
          />
          <p class="text-sm">
            商品情報を準備中です
          </p>
        </div>

        <!-- お問い合わせCTA -->
        <div class="mt-16 rounded-3xl bg-slate-900 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p class="text-slate-400 text-sm mb-2">
              ご要望・数量・仕様のご相談はお気軽に
            </p>
            <p class="font-serif text-2xl md:text-3xl font-bold text-white">
              無料でお見積りいたします
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 shrink-0">
            <NuxtLink
              :to="`${prefix}/contact`"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold transition-all duration-200 whitespace-nowrap"
            >
              <UIcon
                name="i-heroicons-envelope"
                class="w-5 h-5"
              />
              お問い合わせ
            </NuxtLink>
            <a
              :href="`tel:${cfg.tel}`"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 hover:border-sky-500 text-white rounded-xl font-semibold transition-all duration-200 whitespace-nowrap"
            >
              <UIcon
                name="i-heroicons-phone"
                class="w-5 h-5 text-sky-400"
              />
              {{ cfg.tel }}
            </a>
          </div>
        </div>

        <!-- 他のカテゴリへのリンク -->
        <div class="mt-12">
          <p class="text-sm font-medium text-slate-500 mb-5">
            他のカテゴリを見る
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink
              v-for="s in cfg.services.filter(s => s.slug !== slug)"
              :key="s.slug"
              :to="`${prefix}/services/${s.slug}`"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-sky-400 hover:text-sky-700 text-sm text-slate-600 transition-all duration-200"
            >
              <UIcon
                :name="s.icon"
                class="w-4 h-4"
              />
              {{ s.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
    <CorpFooter />
  </div>
</template>
