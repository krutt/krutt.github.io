<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components'

import { Github, Menu } from 'lucide-vue-next'
import KruttCrest from '@/assets/krutt.svg'

interface RouteProps {
  href: string
  label: string
}

const routes: RouteProps[] = [
  {
    href: '#aesir',
    label: 'Aesir',
  },
  {
    href: '#kogai',
    label: 'Kogai',
  },
  {
    href: '#tayan',
    label: 'Tayan',
  },
]
</script>

<template>
  <header
    class="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background"
  >
    <NavigationMenu class="mx-auto">
      <NavigationMenuList class="container h-14 px-4 w-screen flex justify-between">
        <NavigationMenuItem class="font-bold flex">
          <a rel="noreferrer noopener" href="/" class="ml-2 font-bold text-xl flex">
            <KruttCrest class="inline h-10 mr-2 w-10" />
            Krutt
          </a>
        </NavigationMenuItem>
        <span class="flex md:hidden">
          <Sheet>
            <SheetTrigger class="px-2">
              <Menu class="flex md:hidden h-5 w-5">
                <span class="sr-only">Menu Icon</span>
              </Menu>
            </SheetTrigger>
            <SheetContent :side="left">
              <SheetHeader>
                <SheetTitle class="font-bold text-xl"> Krutt </SheetTitle>
              </SheetHeader>
              <nav class="flex flex-col justify-center items-center gap-2 mt-4">
                <Button
                  :key="route.label"
                  :href="route.href"
                  rel="noreferrer noopener"
                  v-for="route in routes"
                  variant="link"
                >
                  {{ route.label }}
                </Button>
                <Button
                  rel="noreferrer noopener"
                  href=""
                  target="_blank"
                  class="border w-110px"
                  variant="secondary"
                >
                  <Github class="inline h-5 mr-2 w-5" />
                  Github
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </span>
        <nav class="hidden md:flex gap-2">
          <a
            :href="route.href"
            :key="route.label"
            class="text-[17px]"
            v-for="route in routes"
            variant="ghost"
          >
            {{ route.label }}
          </a>
        </nav>

        <div class="hidden md:flex gap-2">
          <a @click.prevent="() => void 0" class="border" variant="secondary">
            <Github class="inline h-5 mr-2 w-5" />
            Github
          </a>
          <ThemeToggle />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
</template>
