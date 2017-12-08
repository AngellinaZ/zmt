<template>
    <div id='register'>
        <header>注册</header>
        <div>
            <ul>
                <li>
                    <input type='tel' placeholder='请输入手机号码' v-model='mobile' />
                </li>
                <li>
                    <input type='password' placeholder='请输入6-20位非纯数字密码' v-model='password' />
                </li>
                <li>
                    <input type='password' placeholder='请再次输入登录密码' v-model='repeatPassword' />
                </li>
                <li>
                    <input type='text' placeholder='请输入验证码' v-model='validateResult' />
                </li>
                <li>
                    <input type='text' placeholder='请输入验证码' v-model='validateCode' />
                    <input type="button" value='获取验证码' />
                </li>
            </ul>
        </div>
    </div>
</template>