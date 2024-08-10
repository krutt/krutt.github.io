/* ~~/src/main.ts */

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

let app = createApp(App)

// pinia
let pinia = createPinia()
app.use(pinia)

app.mount('#app')
