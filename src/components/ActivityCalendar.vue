<template>
  <div class="activityCalendar">
    <div class="left" v-show="config.showWeekDayFlag">
      <div
        v-for="(weekDay, index) in config.weekDayFlagLength"
        :key="index"
        :style="style.weekDay(weekDay)"
      >
        {{ weekDay.text }}
      </div>
    </div>
    <div class="right">
      <div class="header" v-show="config.showHeader" :style="`height: ${config.fontSize}px;`">
        <div
          v-for="(month, index) in config.headerLength"
          :key="index"
          :style="style.header(month)"
        >
          {{ month.text }}
        </div>
      </div>
      <div class="content" :style="style.content()">
        <div
          class="item"
          v-for="(item, index) in config.data"
          :key="index"
          :style="style.item(item)"
          @click="config.clickEvent ? config.clickEvent(item) : null"
        ></div>
      </div>
      <div class="levelFlagContent" v-show="config.showLevelFlag">
        <div :style="`font-size: ${config.fontSize}px; color: ${config.fontColor}`">
          {{ config.levelFlagText ? config.levelFlagText[0] : '' }}
        </div>
        <div class="levelFlag" :style="style.levelFlag()">
          <div
            v-for="(i, index) in config.colors"
            :key="index"
            :style="style.levelFlagItem(index)"
          ></div>
        </div>
        <div :style="`font-size: ${config.fontSize}px; color: ${config.fontColor}`">
          {{ config.levelFlagText ? config.levelFlagText[1] : '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, reactive, watch, computed, defineProps } from 'vue'

interface settingType {
  data: { date: string; count: number; index: number }[] | null | undefined
  endDate: string | null | undefined
  width: number
  height?: number
  cellLength?: number
  cellInterval?: number
  cellBorderRadius?: number
  header?: string[]
  backgroundColor?: string
  colors: string[]
  weekDayFlagText: string[]
  levelFlagText: string[]
  fontSize: number
  fontColor: string
}

interface controllerType {
  showHeader?: boolean
  showWeekDayFlag?: boolean
  showLevelFlag?: boolean
}

interface functionType {
  levelMapper?: Function
  clickEvent?: Function
}

interface computedType {
  beginDate?: string
  levels?: number
  headerLength?: { length: number; text: string }[]
  weekDayFlagLength?: { length: number; text: string }[]
}

type objectType = settingType &
  controllerType &
  functionType &
  computedType & { [name: string]: any }

const props = defineProps([
  'data',
  'endDate',
  'width',
  'height',
  'cellLength',
  'cellInterval',
  'cellBorderRadius',
  'header',
  'backgroundColor',
  'colors',
  'weekDayFlagText',
  'levelFlagText',
  'fontSize',
  'fontColor',
  'showHeader',
  'showWeekDayFlag',
  'showLevelFlag',
  'levelMapper',
  'clickEvent',
])

var propsChange = computed(() => {
  return props
})

watch(
  propsChange,
  (nv, ov) => {
    init()
  },
  {
    deep: true,
  }
)

var data: { date: string; count: number }[] | null | undefined = []

const config = reactive<objectType>({
  data: [],
  beginDate: '',
  endDate: '',
  width: 35,
  height: 7,
  cellLength: 16,
  cellInterval: 6,
  cellBorderRadius: 3,
  header: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  headerLength: [],
  showHeader: true,
  backgroundColor: '#ffffff',
  colors: ['#f5f5f5', '#ebfaff', '#e5f9ff', '#c7f1ff', '#86e0fe', '#3ecefe'],
  showWeekDayFlag: true,
  weekDayFlagText: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  weekDayFlagLength: [],
  levels: 6,
  levelMapper: function levelMapper(count: any) {
    if (count == 0) {
      return 0
    } else if (count <= 1) {
      return 1
    } else if (count <= 3) {
      return 2
    } else if (count <= 6) {
      return 3
    } else if (count <= 9) {
      return 4
    } else {
      return 5
    }
  },
  showLevelFlag: true,
  levelFlagText: ['Less', 'More'],
  fontSize: 12,
  fontColor: '#080808',
  clickEvent: function clickEvent(item: any) {},
})

const style = reactive({
  header(month: { length: number; text: string }): string {
    return `
            left: ${month.length}px;
            font-size: ${config.fontSize}px;
            color: ${config.fontColor};
        `
  },
  weekDay(weekDay: { length: number; text: string }): string {
    return `
            top: ${weekDay.length - 8}px;
            font-size: ${config.fontSize - 2}px;
            color: ${config.fontColor};

        `
  },
  content(): string {
    return `
            grid-template-columns: repeat(${config.width + 1},${
              config.cellLength + config.cellInterval / 2
            }px);
            grid-template-rows: repeat(${config.height} ,${
              config.cellLength + config.cellInterval / 2
            }px);
            background-color: ${config.backgroundColor};
        `
  },
  item(varitem: { index: number; count: number; date: string }): string {
    return `
            width: ${config.cellLength}px;
            height: config.cellLength px;
            background-color: ${
              config?.colors[config.levelMapper ? config.levelMapper(varitem.count) : 0]
            };
            border-radius: ${config.cellBorderRadius}px;
            visibility: ${varitem.index < 0 ? 'hidden;' : ''};
        `
  },
  levelFlag(): string {
    return `
            grid-template-columns: repeat(${config.colors.length},${
              config.cellLength + config.cellInterval / 2
            }px);
            grid-template-rows: repeat(1,${config.cellLength + config.cellInterval / 2}px);
            background-color: ${config.backgroundColor};
        `
  },
  levelFlagItem(i: number): string {
    return `
            width: ${config.cellLength}px;
            background-color:  ${config.colors[i]};
            border-radius: ${config.cellBorderRadius}px;
            font-size: ${config.fontSize}px;
        `
  },
})

function calculateBeginDate() {
  let tempMonthDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let tempAll = config.width * config.height
  if (!config.endDate) return
  let tempYMD = config.endDate.split('-')
  let endY = Number(tempYMD[0]) - 0,
    endM = Number(tempYMD[1]) - 0,
    endD = Number(tempYMD[2]) - 0
  let begY = endY,
    begM = endM,
    begD = endD
  if (tempAll <= endD) {
    begD = 1
  } else {
    tempAll -= endD
    begM = ((begM - 1 + 11) % 12) + 1
    begD = 1
    while (tempAll > 0) {
      if ((begY % 4 == 0 && begY % 100 != 0) || begY % 400 == 0) tempMonthDay[2] = 29
      else tempMonthDay[2] = 28
      for (let i = begM; i > 0; i--) {
        if (tempMonthDay[i] <= tempAll) {
          tempAll -= tempMonthDay[i]
          begM = ((begM - 1 + 11) % 12) + 1
        } else {
          begD = tempMonthDay[i] - tempAll
          tempAll = 0
          break
        }
      }
      if (tempAll > 0) begY -= 1
    }
  }
  config.beginDate =
    begY + '-' + (begM < 10 ? '0' + begM : begM) + '-' + (begD < 10 ? '0' + begD : begD)
}

function dataProcessor() {
  if (!data) return
  data.sort((a, b) => {
    if (a.date > b.date) return 1
    else if (a.date < b.date) return -1
    else return 0
  })
  let tempMonthDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let tempAll = config.width * config.height
  let tempCount = 0
  if (!config.beginDate) return
  let tempYMD = config.beginDate.split('-')
  let nowY = Number(tempYMD[0]) - 0,
    nowM = Number(tempYMD[1]) - 0,
    nowD = Number(tempYMD[2]) - 0
  if ((nowY % 4 == 0 && nowY % 100 != 0) || nowY % 400 == 0) tempMonthDay[2] = 29
  nowD++
  tempCount++
  if (nowD > tempMonthDay[nowM]) {
    nowD = 1
    nowM++
  }
  if (nowM > 12) {
    nowM = 1
    nowY++
    if ((nowY % 4 == 0 && nowY % 100 != 0) || nowY % 400 == 0) tempMonthDay[2] = 29
    else tempMonthDay[2] = 28
  }
  let tempArray: { index: number; count: number; date: string }[] = []
  let j = 0
  for (let i = 0; i < tempAll; i++) {
    let tempNowDate =
      nowY + '-' + (nowM < 10 ? '0' + nowM : nowM) + '-' + (nowD < 10 ? '0' + nowD : nowD)
    let tempItem = { index: i, count: 0, date: tempNowDate }
    if (j < data.length) {
      while (j < data.length && data[j].date < tempNowDate) j++
      if (j < data.length && data[j].date == tempNowDate) {
        tempItem.count = data[j].count
        j++
      }
    }
    tempArray.push(tempItem)
    nowD += 1
    tempCount++
    if (nowD > tempMonthDay[nowM]) {
      nowD = 1
      nowM += 1
      if (nowM > 12) {
        nowM = 1
        nowY += 1
        if ((nowY % 4 == 0 && nowY % 100 != 0) || nowY % 400 == 0) tempMonthDay[2] = 29
        else tempMonthDay[2] = 28
      }
      if (config.headerLength) {
        config.headerLength.push({
          length: (config.cellLength + config.cellInterval / 2) * (tempCount / config.height),
          text: config.header[nowM - 1],
        })
      }
    }
  }
  let endWeekDay = new Date(nowY + '-' + nowM + '-' + (nowD - 1)).getDay()
  for (let i = 0; i < endWeekDay; i++)
    tempArray.unshift({ index: i - endWeekDay, date: '', count: 0 })
  config.data = tempArray
  if (config.showWeekDayFlag && config.weekDayFlagText) {
    if (config.weekDayFlagText.length > 7) {
      config.weekDayFlagText = config.weekDayFlagText.slice(0, 7)
    }
    for (let i = 0; i < config.height; i++) {
      if (i % 2 != 0) continue
      config.weekDayFlagLength.push({
        length:
          (config.fontSize * 4) / 2 +
          20 +
          config.cellInterval +
          i * (config.cellLength + config.cellInterval / 2),
        text: config.weekDayFlagText[i % 7],
      })
    }
  }
}

function init() {
  if (props.endDate) config.endDate = props.endDate
  else {
    let t = new Date()
    config.endDate =
      t.getFullYear() +
      '-' +
      (t.getMonth() + 1 < 10 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1) +
      '-' +
      (t.getDate() + 1 < 10 ? '0' + t.getDate() : t.getDate())
  }
  if (props.data) data = props.data
  if (props.height) config.height = props.height
  if (props.width) config.width = props.width
  if (props.cellLength) config.cellLength = props.cellLength
  if (props.cellInterval) config.cellInterval = props.cellInterval
  if (props.cellBorderRadius) config.cellBorderRadius = props.cellBorderRadius
  if (props.header) config.header = props.header
  if (props.showHeader) config.showHeader = props.showHeader
  if (props.backgroundColor) config.backgroundColor = props.backgroundColor
  if (props.colors) config.colors = props.colors
  if (typeof props.showWeekDayFlag == 'boolean') config.showWeekDayFlag = props.showWeekDayFlag
  if (props.weekDayFlagText) config.weekDayFlagText = props.weekDayFlagText
  if (props.levelMapper) config.levelMapper = props.levelMapper
  if (typeof props.showLevelFlag == 'boolean') config.showLevelFlag = props.showLevelFlag
  if (props.levelFlagText) config.levelFlagText = props.levelFlagText
  if (props.fontSize) config.fontSize = props.fontSize
  if (props.fontColor) config.fontColor = props.fontColor
  if (props.clickEvent) config.clickEvent = props.clickEvent
  calculateBeginDate()
  dataProcessor()
}

onMounted(() => {
  nextTick(() => {
    init()
  })
})
</script>

<style scoped>
.activityCalendar {
  width: max-content;
  height: max-content;
  box-sizing: border-box;
  display: flex;
}
.activityCalendar .left {
  position: relative;
  width: 100px;
}
.activityCalendar .left > div {
  width: max-content;
  right: 0;
  position: absolute;
  font-size: 16px;
}

.activityCalendar .right {
  width: max-content;
  height: max-content;
  box-sizing: border-box;
  padding: 14px;
  display: flex;
  flex-direction: column;
}
.activityCalendar .right .header {
  padding: 10px 0;
  position: relative;
}
.activityCalendar .right .header > div {
  width: max-content;
  top: 0;
  position: absolute;
}
.activityCalendar .right .content {
  display: grid;
  grid-auto-flow: column;
}
.activityCalendar .right .content .item {
  aspect-ratio: 1;
  margin: auto;
  transition-duration: 100ms;
}
.activityCalendar .right .content .item:hover {
  cursor: pointer;
  transform: scale(1.2);
}

.activityCalendar .levelFlagContent {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 8px;
}

.activityCalendar .levelFlagContent .levelFlag {
  display: grid;
  grid-auto-flow: column;
  margin: 0 5px;
}

.activityCalendar .levelFlagContent .levelFlag > div {
  aspect-ratio: 1;
  margin: auto;
}
</style>
