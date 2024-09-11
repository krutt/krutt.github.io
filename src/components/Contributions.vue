<script lang="ts" setup>
// imports
import { useColorMode, useWindowSize } from '@vueuse/core'
import { Ref, onMounted, ref, watchEffect } from 'vue'

// components
import { ActivityCalendar } from '@/components'

// composables
const theme = useColorMode()
const { width } = useWindowSize()

// constants
const colors = ['#FFFCF2', '#CCC5B9', '#FCA311', '#FF9900', '#EB5E28']

// refs
let backgroundColor = ref('#000')
let cellBorderRadius = ref(4)
let cellLength = ref(20)
let contributions: Ref<{ date: string; count: number }[]> = ref([])
let fontColor = ref('#fff')
let weeks = ref(20)

// lifecycle
onMounted(async () => {
  let activity: { [key: string]: number } = {}
  for (let page = 0; page <= 3; page++) {
    await new Promise((res: any) => setTimeout(res, page * 800)) // delay 0.8s per page
    let resp = await fetch(
      `https://api.github.com/users/aekasitt/events?page=${page}&per_page=100`,
      {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
      }
    )
    if (!resp.ok) continue
    let data: { created_at: string; type: string }[] = await resp.json()
    // data = data.filter(row => row.type == 'PushEvent' && !!row['org'] && row.org.login == 'krutt')
    data = data.filter(row => row.type == 'PushEvent')
    data.forEach(row => {
      let date = new Date(row.created_at).toISOString().substring(0, 10)
      if (activity[date]) {
        activity[date] += 1
      } else {
        activity[date] = 1
      }
    })
  }
  for (const [date, count] of Object.entries(activity)) {
    contributions.value.push({ date, count })
  }
})

watchEffect(() => {
  backgroundColor.value = theme.value === 'light' ? '#fff' : '#080808'
  fontColor.value = theme.value === 'light' ? '#080808' : '#fff'
  if (width.value < 600) {
    cellLength.value = 10
    cellBorderRadius.value = 2
    weeks.value = 20
  } else if (width.value > 600 && width.value < 1000) {
    cellLength.value = 15
    cellBorderRadius.value = 3
    weeks.value = 30
  } else {
    cellLength.value = 20
    cellBorderRadius.value = 4
    weeks.value = 40
  }
})
</script>
<template>
  <section id="contributions" class="container pt-24 sm:py-32">
    <h2
      class="text-center text-md lg:text-xl font-bold mb-8 dark:drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]"
    >
      <span
        class="bg-gradient-to-r from-[#7B6A4B] via-[#B39F7B] to-[#7B6A4B] text-transparent bg-clip-text"
      >
        Commitments and Contributions
      </span>
    </h2>
    <ActivityCalendar
      :data="contributions"
      :width="weeks"
      :height="7"
      :backgroundColor="backgroundColor"
      :cellLength="cellLength"
      :cellInterval="10"
      :colors="colors"
      :cellBorderRadius="cellBorderRadius"
      :fontColor="fontColor"
      :fontSize="12"
      :showLevelFlag="true"
    />
  </section>
</template>
