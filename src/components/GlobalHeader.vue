<template>
    <div class="GlobalHeader mb-5">
        <nav class="navbar navbar-dark bg-primary flex-top">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">之乎者也-专栏</router-link>
                <div v-if="!user.isLogin">
                    <router-link to="/Login" class="btn btn-outline-light btn-lg m-2">登录</router-link>
                    <router-link to="/Login" class="btn btn-outline-light btn-lg">注册</router-link>
                </div>
                <div v-else>
                    <!-- <span class="navbar-text">你好 {{ user.name }}</span> -->
                    <yc-dropdown :title="`你好 ${user.name}`">
                        <yc-dropdown-item>
                            <span>新建文章</span>
                        </yc-dropdown-item>
                        <yc-dropdown-item :disabled="true">
                            <span>编辑资料</span>
                        </yc-dropdown-item>
                        <yc-dropdown-item>
                            <span>退出登录</span>
                        </yc-dropdown-item>
                    </yc-dropdown>
                </div>
            </div>
            <div>

            </div>
        </nav>
    </div>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue'
    import YcDropdown from '@/components/YcDropdown.vue'
    import YcDropdownItem from '@/components/YcDropdownItem.vue'

    export interface UserProps {
        id: number,
        name?: string,
        isLogin: boolean
    }
    export default defineComponent({
        name: 'GlobalHeader',
        components: {
            YcDropdown,
            YcDropdownItem
        },
        props: {
            user: {
                type: Object as PropType<UserProps>,
                required: true
            }
        },
        setup () {
            return {}
        }
    })
</script>

<style scoped>
    .GlobalHeader {

    }
</style>
<style>
    .GlobalHeader {

    }
</style>
