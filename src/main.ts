import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import CommonUI from '@ist/commonui-components'
import '@ist/commonui-components/style.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Install PrimeVue first (required by CommonUI)
app.use(PrimeVue, {
  unstyled: true,
  ripple: true
})

// Install all CommonUI components globally
app.use(CommonUI, {
  primevue: {
    ripple: true
  }
})

app.mount('#app')

