import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/reset.css'

import '@/maints/directive'

const app = createApp(App)

// app.directive('clickOutside', {
//     mounted (el, binding) {
//         const handler = (e: MouseEvent) => {
//             if (el.contains(e.target)) {
//                 return false
//             } else {
//                 binding.value(e)
//             }
//         }
//         el._clickOutsideHandler = handler
//         document.addEventListener('click', handler)
//     },
//     unmounted (el) {
//         document.removeEventListener('click', el._clickOutsideHandler)
//         delete el._clickOutsideHandler
//     }
// })

app.mount('#app')
