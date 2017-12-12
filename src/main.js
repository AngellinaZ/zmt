// 引用 vue，路由
import Vue from 'vue' 
import VueRouter from 'vue-router'
// 引用 路由配置文件，入口文件
import App from './App'
<<<<<<< HEAD
import routes from './router/index'
=======
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
>>>>>>> d620d7f43908610cf980d5ed12b00edbbf608324
import './assets/common.css'
import './assets/common.less'

Vue.use(VueRouter)

// Vue.prototype.$http = axios
// Vue.prototype.HOST = '/api'
// Vue.config.productionTip = false

// 使用配置文件规则
const router = new VueRouter({
   routes  // 注意: routes: routes 
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})