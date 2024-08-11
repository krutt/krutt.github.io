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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: 'aware',
  },
  {
    title: 'Build on Bitcoin',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
    image: 'learn',
  },
  {
    title: 'Understand Bitcoin',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.',
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
          <BlockAdept v-if="block.image == 'adept'" />
          <BlockAware v-if="block.image == 'aware'" />
          <BlockLearn v-if="block.image == 'learn'" />
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
