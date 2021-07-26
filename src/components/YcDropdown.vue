<template>
    <div class="YcDropdown dropdown">
        <button class="btn btn-outline-light dropdown-toggle my-2" type="button" @click.prevent="toggleEvent">{{ title }}</button>
        <ul v-if="isOpen" class="dropdown-menu" :style="{display: 'block'}">
            <li>
                <a class="dropdown-item" href="#">新建文章</a>
            </li>
            <li>
                <a class="dropdown-item" href="#">编辑资料</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue'
    export default defineComponent({
        name: 'YcDropdown',
        props: {
            title: {
                type: String,
                required: true
            }
        },
        setup () {
            const isOpen = ref(false)
            const toggleEvent = () => {
                isOpen.value = !isOpen.value
            }
            return {
                isOpen,
                toggleEvent
            }
        }
    })
</script>

<style scoped>
    .YcDropdown {

    }
</style>
<style>
    .YcDropdown {

    }
</style>
