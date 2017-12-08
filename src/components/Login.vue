<template>
    <div id='login'>
        <header>
            <span class='left' id='go-back'></span>
            <span class='middle'>{{ msg }}</span>
            <span class='right-txt' id='reg'>注册</span>
        </header>
        <div>
            <ul>
                <li>
                    <input type='text' name='username' placeholder='请输用户名' v-model='userName' />
                </li>
                <li>
                    <input type='password' name='password' placeholder='请输密码' v-model='password' />
                </li>
                <li>
                    <input type="button" name="button" value='登录' :disabled='userName == "" || password == ""' @click='login' />
                </li>
            </ul>
        </div>
    </div>
</template>

<script type='text/babel'>
    import axios from 'axios'
    import { zmtAlert } from '../assets/common.js';

    export default {
        name: 'Login',
        data () {
            return {
                msg : '登录',
                userName: "",
                password: ""
            }
        },
        methods: {
            login: function() {
            let _this = this
            axios({
                    method: 'post',
                    url: this.HOST + '/yztz_user_login_check.htm',
                    params: {
                        username: _this.userName,
                        password: _this.password
                    }
                }).then(function(response) {
                    var datas = response.data
                    //console.log(datas)
                    _this.$router.push('/register');
                }).catch(function(error) {
                    //console.log(error)
                })
            }
        },
        mounted: function() {
            zmtAlert()
        }
    }
</script>