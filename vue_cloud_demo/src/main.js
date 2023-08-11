import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// 将App组件挂载到id为app的div下面
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
