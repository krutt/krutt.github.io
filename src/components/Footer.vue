<script lang="ts" setup>
/* vectors */
import { Facebook, Github } from 'lucide-vue-next'
import KruttCrest from '@/assets/krutt.svg'
</script>

<template>
  <footer id="footer">
    <hr class="w-11/12 mx-auto" />
    <section
      class="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8"
    >
      <div class="col-span-full xl:col-span-2">
        <a
          rel="noreferrer noopener"
          href="https://krutt.github.io"
          class="flex font-bold items-center text-xl"
        >
          <KruttCrest />
          Krutt
        </a>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Follow US</h3>
        <div>
          <a
            class="flex hover:opacity-100 items-center opacity-60"
            href="https://github.com/aekasitt"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Github class="h-4 inline mr-1 w-4" />
            GitHub
          </a>
        </div>
        <div>
          <a
            class="flex hover:opacity-100 items-center opacity-60"
            href="https://x.com/aekasitt"
            rel="noreferrer noopener"
            target="_blank"
          >
            <b class="inline mr-1">𝕏</b>
            X / Twitter
          </a>
        </div>
        <div>
          <a
            class="flex items-center hover:opacity-100 opacity-60"
            href="https://fb.com/krutt.fi"
            rel="noreferrer noopener"
            target="_blank"
          >
            <Facebook class="h-4 inline mr-1 w-4" />
            Facebook
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Platforms</h3>
        <div>
          <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100"> Web </a>
        </div>
        <div>
          <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100"> Mobile </a>
        </div>
        <div>
          <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100"> Desktop </a>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">About</h3>
        <div>
          <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100"> Features </a>
        </div>
        <div>
          <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100"> Pricing </a>
        </div>
        <div>
          <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100"> FAQ </a>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="font-bold text-lg">Community</h3>
        <div>
          <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100"> Youtube </a>
        </div>
        <div>
          <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100"> Discord </a>
        </div>
        <div>
          <a rel="noreferrer noopener" href="#" class="opacity-60 hover:opacity-100"> Twitch </a>
        </div>
      </div>
    </section>
    <section class="container pb-14 text-center">
      <h3>
        &copy; 2024 Landing page made by
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://github.com/aekasitt"
          class="text-primary transition-all border-primary hover:border-b-2"
        >
          Sitt Guruvanich
        </a>
      </h3>
    </section>
  </footer>
</template>
