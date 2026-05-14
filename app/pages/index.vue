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
useCanonical()
useJsonLd()
</script>

<template>
  <div>
    <!-- ① ヒーロー -->
    <div
      id="snap-hero"
      class="md:h-screen md:overflow-hidden"
    >
      <HeroSection />
    </div>

    <!-- ② About -->
    <div
      id="snap-about"
      class="md:h-screen md:overflow-hidden"
    >
      <AboutSection />
    </div>

    <!-- ③ ギャラリー -->
    <div
      id="snap-gallery"
      class="md:h-screen md:overflow-hidden"
    >
      <GallerySection />
    </div>

    <!-- ④ メニュー -->
    <div
      id="snap-menu"
      class="md:h-screen md:overflow-hidden"
    >
      <MenuPreview :snap="true" />
    </div>

    <!-- ⑤ お知らせ -->
    <div
      id="snap-news"
      class="md:h-screen md:overflow-hidden"
    >
      <NewsSection />
    </div>

    <!-- ⑥ アクセス -->
    <div
      id="snap-access"
      class="md:h-screen md:overflow-hidden"
    >
      <AccessSection />
    </div>

    <!-- フッター（スナップ外：最後のセクションを過ぎるとスクロールで表示） -->
    <AppFooter />

    <!-- セクションドットナビ（右側固定） -->
    <ScrollDots />
  </div>
</template>
