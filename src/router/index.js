//引用模板
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Test from '@/components/Test'

//配置路由
export default [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]