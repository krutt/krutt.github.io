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

/* schemas */
interface Repository {
  badges: {title: string; variant: string;}[]
  description: string
  imageUrl: string
  name: string
}

/* constants */
const repositories: Repository[] = [
  {
    badges: [
      {
        text: '',
        variant: 'https://www.linkedin.com/in/leopoldo-miranda/',
      },
      {
        text: '',
        variant: 'https://www.facebook.com/',
      },
      {
        text: '',
        variant: 'https://www.instagram.com/',
      },
    ],
    description: 'Isolated-margin account for decentralized Bitcoin trading via the Lightning network. ',
    imageUrl: 'https://raw.githubusercontent.com/krutt/othello/master/static/othello.svg',
    name: 'Othello',
  },
  {
    badges: [
      {
        text: '',
        variant: 'ghost',
      },
      {
        text: '',
        variant: 'ghost',
      },
      {
        text: '',
        variant: 'ghost',
      },
    ],
    description: '',
    imageUrl: 'https://raw.githubusercontent.com/krutt/lnd-krub/master/public/flag.svg',
    name: 'LND Krub',
  },
  {
    badges: [
      {
        text: '',
        variant: 'ghost',
      },
      {
        text: '',
        variant: 'ghost',
      },
    ],
    description: 'Lightning Service Provider built on top of FastAPI asynchronous web framework',
    imageUrl: 'https://raw.githubusercontent.com/krutt/tesla-ball/master/static/tesla-ball.svg',
    name: 'Tesla Ball',
  },
  {
    badges: [
      {
        text: '',
        variant: 'ghost',
      },
      {
        text: '',
        variant: 'ghost',
      },
    ],
    description: 'Tayan is a successor to SuperTestnet\'s StatechainJS in a world where copying and pasting are outlawed.',
    imageUrl: 'https://raw.githubusercontent.com/krutt/tayan/master/static/tayan.svg',
    name: 'Tayan',
  },
]
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
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor pariatur sit!
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
          <CardDescription class="text-primary">
            {{ repository.description }}
          </CardDescription>
        </CardHeader>
        <CardContent class="text-center pb-2">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </CardContent>
        <CardFooter>
          <div :key="badge.text" v-for="badge in badges">
            <Badge
              rel="noreferrer noopener"
              target="_blank"
              class="sm"
              :variant="badge.variant"
            >
              <span class="sr-only">{{ badge.text }} icon</span>

            </Badge>
          </div>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
