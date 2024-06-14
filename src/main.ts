import './assets/main.css'

import { initializeApp } from 'firebase/app'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import ProgressSpinner from 'primevue/progressspinner'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyBuC0-RGEVcImiVTjUorwf4-egui0kZfSY',
  authDomain: 'interviewlist-500a7.firebaseapp.com',
  projectId: 'interviewlist-500a7',
  storageBucket: 'interviewlist-500a7.appspot.com',
  messagingSenderId: '1053047976154',
  appId: '1:1053047976154:web:22f8ff396425de5776f5e3'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(ToastService)
app.use(createPinia())
app.use(router)
app.component('app-progress-spinner', ProgressSpinner)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.mount('#app')
