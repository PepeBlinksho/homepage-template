<script setup lang="ts">
const cfg = useCorpConfig()
const theme = computed(() => cfg.value.theme ?? 'amber')

useSeoMeta({
  title: cfg.value.seo.title,
  description: cfg.value.seo.description,
  ogTitle: cfg.value.seo.title,
  ogDescription: cfg.value.seo.description,
  ogImage: cfg.value.seo.ogImage,
  ogType: 'website',
  twitterTitle: cfg.value.seo.title,
  twitterDescription: cfg.value.seo.description,
  twitterImage: cfg.value.seo.ogImage,
})
useCorpJsonLd()
</script>

<template>
  <div :data-theme="theme">
    <CorpHeader />
    <main>
      <CorpHero />
      <CorpServices />
      <CorpWorks />
      <CorpAbout />
      <CorpAccess />
    </main>
    <CorpFooter />
  </div>
</template>
