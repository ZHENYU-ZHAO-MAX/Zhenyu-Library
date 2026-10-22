// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'



// Vue App
createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })
  .mount('#app');
