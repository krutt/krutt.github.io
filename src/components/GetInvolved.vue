<script lang="ts" setup>
/* components */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
/* vectors */
import Cypherpunk from '@/assets/cypherpunk.svg'
import { Aperture, Donut, FlameKindling } from 'lucide-vue-next'

/* schemas */
interface Step {
  title: string
  description: string
  icon: string
}

/* constants */
let steps: Step[] = [
  {
    description: 'Find ideas you would like to work on that you cannot live without when using Bitcoin.',
    icon: 'aperture',
    title: 'Capture Spark',
  },
  {
    description: 'Make a use-case analysis and an improvement proposal to see it become reality.',
    icon: 'donut',
    title: 'Take a Bite',
  },
  {
    description: 'Once caught on, make sure to give it your all to kindle the sparks of genius you had and introduce the idea to the collective.',
    icon: 'flame-kindling',
    title: 'Kindle Greatness',
  },
]
</script>

<template>
  <section class="container py-24 sm:py-32">
    <div class="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold">
          <span class="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Collective
          </span>
          Mission
        </h2>

        <p class="text-muted-foreground text-xl mt-4 mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor.
        </p>

        <div class="flex flex-col gap-8">
          <Card :key="step.title" v-for="step in steps">
            <CardHeader class="space-y-1 flex md:flex-row justify-start items-start gap-4">
              <div class="mt-1 bg-primary/20 p-1 rounded-2xl">
                <Aperture v-if="step.icon == 'aperture'" />
                <Donut v-if="step.icon == 'donut'" />
                <FlameKindling v-if="step.icon == 'flame-kindling'" />
              </div>
              <div>
                <CardTitle>{{ step.title }}</CardTitle>
                <CardDescription class="text-md mt-2"> {{ step.description }} </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
      <Cypherpunk class="w-[300px] md:w-[500px] lg:w-[600px]" />
    </div>
  </section>
</template>
