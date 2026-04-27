<script setup lang="ts">
defineProps<{
  label: string
  title: string
  description?: string
  light?: boolean
  center?: boolean
}>()
</script>

<template>
  <div class="mb-10 md:mb-12" :class="center ? 'text-center' : ''">
    <p
      class="text-xs tracking-[0.5em] uppercase font-medium mb-3"
      :class="light ? 'text-amber-300' : 'text-amber-500'"
    >
      {{ label }}
    </p>
    <h2
      class="font-serif font-semibold text-4xl md:text-5xl leading-tight"
      :class="light ? 'text-white' : 'text-stone-900'"
    >
      {{ title }}
    </h2>
    <div
      class="h-0.5 mt-5 bg-gradient-to-r from-amber-500 to-amber-300"
      :class="center ? 'w-12 mx-auto' : 'w-12'"
    />
    <p
      v-if="description"
      class="mt-5 text-base md:text-lg leading-relaxed"
      :class="[light ? 'text-white/70' : 'text-stone-500', center ? 'max-w-2xl mx-auto' : 'max-w-2xl']"
    >
      {{ description }}
    </p>
  </div>
</template>
