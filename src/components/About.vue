<script lang="ts" setup>
/* imports */
import Glist from '@/assets/glist.svg'

/* constants */
interface Statistics {
  quantity: string
  description: string
}

const statistics: Statistics[] = [
  {
    quantity: '20K+',
    description: 'Reel Views',
  },
  {
    quantity: '500+',
    description: 'Facebook Followers',
  },
  {
    quantity: '9',
    description: 'Repositories',
  },
  {
    quantity: '1',
    description: 'Blockchain',
  },
]
</script>

<template>
  <section id="about" class="container py-24 sm:py-32">
    <div class="bg-muted/50 border rounded-lg py-12">
      <div class="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
        <Glist class="rounded-lg md:min-w-[384px] min-w-[200px]" />
        <div class="bg-green-0 flex flex-col justify-between">
          <div class="pb-6">
            <h2 class="text-3xl md:text-4xl font-bold">
              About
              <span
                class="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text"
              >
                Krutt
              </span>
            </h2>
            <p class="text-xl text-muted-foreground mt-4">
              Krutt collective is a project under the supervision of WOW Robot trading firm with
              retail-friendly robot-trading solutions tapping into the ever fleeting gains,
              spear-headed by Bitcoin. Krutt began to explore the real possibilities of the future
              of crypto-economics in understanding global liquidity without defying evidence seen in
              market sentiments. Bitcoin will outlast all of us, but the next 1,000,000 Bitcoiner
              will need a jumping off point into the Bitcoin rabbit-hole and we see problems in need
              of solving. The collective learns from teaching and Krutt learns from creating concise
              and condense technical contents in the form of Facebook Reels targeting the
              ever-expanding audience in South East Asia.
            </p>
          </div>
          <section id="statistics">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div :key="stat.description" class="space-y-2 text-center" v-for="stat in statistics">
                <h2 class="text-3xl sm:text-4xl font-bold">{{ stat.quantity }}</h2>
                <p class="text-xl text-muted-foreground">{{ stat.description }}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
