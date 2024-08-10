<script setup>
/* vectors */
import { Moon, Sun } from 'lucide-vue-next'

/* composables */
let theme = useColorMode({ disableTransition: false })

/* functions */
let toggleTheme = () => (theme.value = theme.value !== 'dark' ? 'dark' : 'light')
</script>
<template>
  <div>
    <a @click="toggleTheme">
      <div v-if="theme == 'light'">
        <Moon />
      </div>
      <div v-else>
        <Sun />
      </div>
      <span class="sr-only">Toggle theme</span>
    </a>
  </div>
</template>
