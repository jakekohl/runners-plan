import './assets/main.css'

import { createApp } from 'vue'

// Vue App
import App from './App.vue'
import router from './router'

// PrimeVue
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import MenuBar from 'primevue/menubar'
import Card from 'primevue/card'
import Aura from '@primevue/themes/aura'

const app = createApp(App)

app
  .use(PrimeVue, {
    theme: { preset: Aura },
    zIndex: {
      modal: 1100,
      overlay: 1000,
      menu: 1000,
      tooltip: 1100,
    },
    ripple: true,
  })
  .component('Button', Button)
  .component('MenuBar', MenuBar)
  .component('Card', Card)
  .use(router)

app.mount('#app')
