<script lang="ts" setup>
/* imports */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

/* vectors */
import { Github } from 'lucide-vue-next'

/* schemas */
interface Repository {
  badges: { title: string; variant: string }[]
  content: string
  description: string
  imageUrl: string
  name: string
  repoUrl: string
}

/* constants */
const repositories: Repository[] = [
  {
    badges: [
      {
        text: 'JavaScript',
        variant: 'ghost',
      },
      {
        text: 'Lightning',
        variant: 'ghost',
      },
      {
        text: 'Derivatives',
        variant: 'ghost',
      },
    ],
    content: 'Isolated-margin account for decentralized Bitcoin trading via the Lightning network.',
    description: 'Library for LNMarkets & More',
    imageUrl: 'https://raw.githubusercontent.com/krutt/othello/master/static/othello.svg',
    name: 'Othello',
    repoUrl: 'https://github.com/krutt/othello',
  },
  {
    badges: [
      {
        text: 'TypeScript',
        variant: 'ghost',
      },
      {
        text: 'Lightning',
        variant: 'ghost',
      },
      {
        text: 'LSP',
        variant: 'ghost',
      },
    ],
    content: 'Rewritten wrapper for Lightning Network Daemon in TypeScript based on LNDHub',
    description: 'Modern Stack LSP',
    imageUrl: 'https://raw.githubusercontent.com/krutt/lnd-krub/master/public/flag.svg',
    name: 'LND Krub',
    repoUrl: 'https://github.com/krutt/lnd-krub',
  },
  {
    badges: [
      {
        text: 'Python',
        variant: 'ghost',
      },
      {
        text: 'FastAPI',
        variant: 'ghost',
      },
      {
        text: 'Atomic Swap',
        variant: 'ghost',
      },
    ],
    content: 'Lightning Service Provider built on top of FastAPI asynchronous web framework',
    description: 'API for Swaps and Transfers',
    imageUrl: 'https://raw.githubusercontent.com/krutt/tesla-ball/master/static/tesla-ball.svg',
    name: 'Tesla Ball',
    repoUrl: 'https://github.com/krutt/tesla-ball',
  },
  {
    badges: [
      {
        text: 'JavaScript',
        variant: 'ghost',
      },
      {
        text: 'Statechain',
        variant: 'ghost',
      },
      {
        text: 'Signet',
        variant: 'ghost',
      },
    ],
    content:
      "Tayan is a success to SuperTestnet's StatechainJS in a world where copying and pasting are outlawed.",
    description: 'Collaborative UTXOs',
    imageUrl: 'https://raw.githubusercontent.com/krutt/tayan/master/static/tayan.svg',
    name: 'Tayan',
    repoUrl: 'https://github.com/krutt/tayan',
  },
]

/* fuctions */
let windowOpen = repoUrl => {
  window.open(repoUrl, '_blank', 'noreferrer noopener')
}
</script>
<template>
  <section id="proof-of-work" class="container py-24 sm:py-32">
    <h2 class="text-3xl md:text-4xl font-bold">
      Krutt's
      <span class="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Proof of Work
      </span>
    </h2>
    <p class="mt-4 mb-10 text-xl text-muted-foreground">
      Krutt has been established in 2023 and work tirelessly to make Bitcoin more approachable
      to Bitdevs everywhere, without layers of abstractions to obscure development directions.
    </p>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
      <Card
        :key="repository.name"
        class="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
        v-for="repository in repositories"
      >
        <CardHeader class="mt-8 flex justify-center items-center pb-2">
          <img
            :src="repository.imageUrl"
            :alt="`${repository.name} ${repository.description}`"
            class="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle class="text-center">{{ repository.name }}</CardTitle>
          <CardDescription class="text-center text-primary">
            {{ repository.description }}
            <p class="flex items-center justify-between mt-2 text-muted-foreground text-sm">
              <Badge
                :key="badge.text"
                :variant="badge.variant"
                class="sm"
                rel="noreferrer noopener"
                target="_blank"
                v-for="badge in repository.badges"
              >
                {{ badge.text }}
              </Badge>
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent class="text-center pb-2">
          <p>{{ repository.content }}</p>
        </CardContent>
        <CardFooter>
          <Button @click.prevent="windowOpen(repository.repoUrl)" size="icon" variant="ghost">
            <span class="sr-only">GitHub icon</span>
            <Github class="h-5 mx-2 w-5" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
