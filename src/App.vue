<template>
    <div class="App">
        <!-- header -->
        <div class="header">
            <global-header :user="user"></global-header>
        </div>
        <!-- body -->
        <div class="body">
            <router-view></router-view>
        </div>
        <!-- footer -->
        <div class="footer">
            <a href="www.bridata.com">www.bridata.com</a>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue'

    export default defineComponent({
        name: 'App',
        components: {
            GlobalHeader
        },
        setup () {
            const user: UserProps = {
                id: 1000,
                name: '于闯',
                isLogin: false
            }

            return {
                user
            }
        }
    })
</script>

<style scoped>
.App {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.App .header {
    width: 100%;
}
.App .body {
    width: 100%;
    flex: 1;
}
.App .footer {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
    text-align: center;
}
</style>
