// 引用 vue，路由
import Vue from 'vue' 
import VueRouter from 'vue-router'
// 引用 路由配置文件，入口文件
import App from './App'
import routes from './router/index'
import MintUI from 'mint-ui'
import axios from 'axios'  
import 'mint-ui/lib/style.css'
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
