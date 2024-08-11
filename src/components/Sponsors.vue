<script lang="ts" setup>
/* imports */
import { Bird } from 'lucide-vue-next'

/* constants */
const sponsors: string[] = ['Krutt', 'collective', 'needs', 'your', 'support']
</script>

<template>
  <section id="sponsors" class="container pt-24 sm:py-32">
    <h2
      class="text-center text-md lg:text-xl font-bold mb-8 dark:drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.6)]"
    >
      <span
        class="bg-gradient-to-r from-[#7B6A4B] via-[#B39F7B] to-[#7B6A4B] text-transparent bg-clip-text"
      >
        Investors and Sponsorship
      </span>
    </h2>
    <div class="flex flex-wrap justify-center items-center gap-4 md:gap-8">
      <div
        :key="i"
        class="flex items-center gap-1 text-muted-foreground/60"
        v-for="(sponsor, i) in sponsors"
      >
        <Bird class="h-12 mr-2 text-primary w-auto" />
        <h3 class="text-xl font-bold">{{ sponsor }}</h3>
      </div>
    </div>
  </section>
</template>
