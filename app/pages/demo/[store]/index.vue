<script setup lang="ts">
const cfg = useShopConfig()

useFullPageScroll()

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
</script>

<template>
  <div>
    <div id="snap-hero" class="md:h-screen md:overflow-hidden">
      <HeroSection />
    </div>
    <div id="snap-about" class="md:h-screen md:overflow-hidden">
      <AboutSection />
    </div>
    <div id="snap-gallery" class="md:h-screen md:overflow-hidden">
      <GallerySection />
    </div>
    <div id="snap-menu" class="md:h-screen md:overflow-hidden">
      <MenuPreview :snap="true" />
    </div>
    <div id="snap-news" class="md:h-screen md:overflow-hidden">
      <NewsSection />
    </div>
    <div id="snap-access" class="md:h-screen md:overflow-hidden">
      <AccessSection />
    </div>
    <AppFooter />
    <ScrollDots />
  </div>
</template>
