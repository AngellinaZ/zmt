<template>
    <div id='register'>
        <header>注册</header>
        <div>
            <ul>

            </ul>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'

    export default {
        name: 'Test',
        data () {},
        methods: {
            showToast: function () {
                Toast("aaa")
            }

        },
        mounted: function() {
            this.showToast()
        }

    }
</script>