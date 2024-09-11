<script lang="ts" setup>
/* components */
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card'
/* vectors */
import BlockAdept from '@/assets/block-adept.svg'
import BlockAware from '@/assets/block-aware.svg'
import BlockLearn from '@/assets/block-learn.svg'

/* schemas */
interface Block {
  title: string
  description: string
  image: string
}

/* constants */
const blocks: Block[] = [
  {
    title: 'Discover Bitcoin',
    description:
      'The first discovery of Bitcoin and Bitcoiners happen via gathering of minds. Many who feel the fiat ' +
      'world cannot satiate the curious minds turn to the bright orange pill for peaceful money revolution.',
    image: 'aware',
  },
  {
    title: 'Build on Bitcoin',
    description:
      'Building is the best way to learn about how Bitcoin came to be. Cypherpunks with clean hands cannot ' +
      'and shall not dictate the future of the only censorship-resistant proof-of-work money network.',
    image: 'learn',
  },
  {
    title: 'Understand Bitcoin',
    description:
      'Once we are deep in the rabbit-hole, the inevitable urge to invite others emerge. Lucky us that we ' +
      'many talented philosophers, podcasters, programmers and people of great influence ready to help.',
    image: 'adept',
  },
]

const pins = ['Bitcoin', 'Lightning', 'Nostr', 'Secp256k1', 'Cryptography', '']
</script>
<template>
  <section id="vision" class="container py-24 sm:py-32 space-y-8">
    <h2 class="text-3xl lg:text-4xl font-bold md:text-center">
      Building
      <span class="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Blocks
      </span>
      to Success
    </h2>
    <div class="flex flex-wrap md:justify-center gap-4">
      <div :key="pin" v-for="pin in pins">
        <Badge variant="secondary" class="text-sm">
          {{ pin }}
        </Badge>
      </div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card :key="block.title" v-for="block in blocks">
        <CardHeader>
          <CardTitle>{{ block.title }}</CardTitle>
        </CardHeader>
        <CardContent>{{ block.description }}</CardContent>
        <CardFooter>
          <BlockAdept
            class="dark:drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            v-if="block.image == 'adept'"
          />
          <BlockAware
            class="dark:drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            v-if="block.image == 'aware'"
          />
          <BlockLearn
            class="dark:drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            v-if="block.image == 'learn'"
          />
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
