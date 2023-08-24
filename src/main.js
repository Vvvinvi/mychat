import Vue from 'vue'
import App from './App.vue'
import VueChatScroll from 'vue-chat-scroll'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueChatScroll)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
