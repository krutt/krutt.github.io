<script lang="ts" setup>
/* components */
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components'

/* vectors */
import { Github } from 'lucide-vue-next'
import KruttCrest from '@/assets/krutt.svg'

/* functions */
let openGitHub = () => (window.open('https://github.com/krutt', '_blank', 'noreferrer, noopener'))
</script>

<template>
  <Navbar />
  <section class="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
    <div class="text-center lg:text-start space-y-6">
      <main class="text-5xl md:text-6xl font-bold">
        <h1 class="inline">
          <span
            class="inline bg-gradient-to-r from-[#7B6A4B] via-[#B39F7B] to-[#7B6A4B] text-transparent bg-clip-text"
          >
            Krutt
          </span>
          brings Bitcoin to the mass.
        </h1>
        Integrating
        <h2 class="inline">
          <span
            class="inline bg-gradient-to-r from-[#EB5E28] via-[#FCA311] to-[#BC13FE] text-transparent bg-clip-text"
          >
            Lightning + Nostr
          </span>
          developers
        </h2>
      </main>

      <p class="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Commited to open-sourcing no second best. Krutt is ahead of its peers sharing these
        following projects:
      </p>

      <div class="space-y-4 md:space-y-0 md:space-x-4">
        <Button class="w-full md:w-1/3">Get Started</Button>
        <Button @click.prevent="openGitHub" class="w-full md:w-1/3" variant="outline">
          Github Profile
          <Github class="inline ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
    <div class="shadow"></div>
  </section>
</template>
