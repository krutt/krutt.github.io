<script lang="ts" setup>
/* components */
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
import AesirCrest from '@/assets/aesir.svg'
import Blob from '@/assets/blobs.svg'
import { Check, Github, Lightbulb } from 'lucide-vue-next'
import TayanCrest from '@/assets/tayan.svg'

/* constants */
const aesirettes = ['Bitcoind', 'LND Cluster', 'Mining dashboard']

/* functions */
let gitHubAesirRepo = () => {
  window.open('http://github.com/krutt/aesir', '_blank', 'noreferrer, noopener')
}
let gitHubTayanRepo = () => {
  window.open('http://github.com/krutt/tayan', '_blank', 'noreferrer, noopener')
}
let gitHubTayanPage = () => {
  window.open('https://krutt.github.io/tayan', '_blank', 'noreferrer, noopener')
}
</script>
<template>
  <div class="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
    <Blob class="h-full w-full" />
    <Card
      class="absolute w-[340px] -top-[50px] drop-shadow-xl shadow-black/10 dark:shadow-white/10"
    >
      <CardHeader class="flex flex-row items-center gap-4 pb-2">
        <Avatar>
          <AvatarImage alt="" src="https://avatars.githubusercontent.com/u/3035165?v=4&size=64" />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
        <div class="flex flex-col">
          <CardTitle class="text-lg">Sitt Guruvanich</CardTitle>
          <CardDescription>@aekasitt</CardDescription>
        </div>
      </CardHeader>
      <CardContent>Commits maketh man!</CardContent>
    </Card>
    <Card
      class="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10"
    >
      <CardHeader class="mt-8 flex justify-center items-center pb-2">
        <AesirCrest
          class="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
        />
        <CardTitle class="text-center">Aesir</CardTitle>
        <CardDescription> Regtest made easy </CardDescription>
      </CardHeader>
      <CardContent class="flex text-center pb-2">
        <Button @click.prevent="gitHubAesirRepo" size="icon" variant="ghost">
          <span class="sr-only">GitHub icon</span>
          <Github class="h-5 mx-2 w-5" />
        </Button>
        <p>CLI for setting up local regtest Bitcoin &amp; Lightning cluster</p>
      </CardContent>
      <CardFooter class="flex flex-col">
        <div class="space-y-4">
          <span :key="aesirette" class="flex" v-for="aesirette in aesirettes">
            <Check class="text-green-500" />
            <p class="ml-2">{{ aesirette }}</p>
          </span>
        </div>
      </CardFooter>
    </Card>
    <Card
      class="absolute top-[140px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10"
    >
      <CardHeader>
        <TayanCrest
          class="absolute grayscale-[0%] -top-12 left-[100px] rounded-full w-24 h-24 aspect-square object-cover"
        />
        <CardTitle class="text-center mt-10"> Tayan </CardTitle>
        <CardDescription class="text-center">
          Successor to StatechainJS
          <p class="flex items-center justify-between mt-2 text-sm">
            <Badge variant="secondary"> JavaScript </Badge>
            <Badge variant="secondary"> Statechain </Badge>
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent class="flex col-span-2 text-center pb-2">
        <Button @click.prevent="gitHubTayanRepo" size="icon" variant="ghost">
          <span class="sr-only">GitHub icon</span>
          <Github class="h-5 mx-2 w-5" />
        </Button>
        <p>In a world where copying and pasting are outlawed.</p>
      </CardContent>
      <hr class="w-4/5 m-auto mb-4" />
      <CardFooter class="flex">
        <Button
          @click.prevent="gitHubTayanPage"
          class="w-full text-md text-center"
          variant="outline"
          >Launch on Signet</Button
        >
      </CardFooter>
    </Card>
    <Card
      class="absolute w-[350px] -right-[10px] bottom-0 drop-shadow-xl shadow-black/10 dark:shadow-white/10"
    >
      <CardHeader class="space-y-1 flex md:flex-row justify-start items-start gap-4">
        <div class="mt-1 bg-primary/20 p-1 rounded-2xl">
          <Lightbulb />
        </div>
        <div>
          <CardTitle>Bitcoin ideas made reality</CardTitle>
          <CardDescription class="text-md mt-2">
            Prototyping is fun, but Krutt's mission is to always be ahead of the game and bring to
            market Bitdevs' latest and greatest.
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  </div>
</template>
