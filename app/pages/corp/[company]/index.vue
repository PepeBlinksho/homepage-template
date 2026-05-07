<script setup lang="ts">
const cfg = useCorpConfig()

useSeoMeta({
  title: cfg.value.seo.title,
  description: cfg.value.seo.description,
  ogTitle: cfg.value.seo.title,
  ogDescription: cfg.value.seo.description,
  ogImage: cfg.value.seo.ogImage,
  ogType: 'website',
})
</script>

<template>
  <div>
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
