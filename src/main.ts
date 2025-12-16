import { createApp } from 'vue'
import CommonUI from '@ist/commonui-components'
import '@ist/commonui-components/style.css'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Install all CommonUI components globally
app.use(CommonUI, {
  primevue: {
    ripple: false
  }
})

// Install Vue Router
app.use(router)

app.mount('#app')

