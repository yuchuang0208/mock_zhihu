<template>
    <div class="YcDropdown dropdown" ref="YcDropdownRef">
        <button class="btn btn-outline-light dropdown-toggle my-2" type="button" @click.prevent="toggleEvent">{{ title }}</button>
        <div v-if="isOpen" class="dropdown-menu" :style="{display: 'block'}">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from 'vue'
    import useClickOutside from '@/hooks/useClickOutside'
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

            const YcDropdownRef = ref<null | HTMLElement>(null)
            const isClickOutside = useClickOutside(YcDropdownRef)

            watch(isClickOutside, () => {
                if (isOpen.value && isClickOutside.value) {
                    isOpen.value = false
                }
            })

            /* const clickOutsideFunc = (e: MouseEvent) => {
                console.log('click target', e.target)
                isOpen.value = false
            } */

            return {
                isOpen,
                toggleEvent,
                // clickOutsideFunc
                YcDropdownRef // 这里返回的响应式对象要个DOM上的ref同名，才能拿到对应Dom节点
            }
        },
        directives: {
            /*  clickOutside: {
                mounted (el, binding) {
                    const handler = (e: MouseEvent) => {
                        if (el.contains(e.target)) {
                            return false
                        } else {
                            binding.value(e)
                        }
                    }
                    el._clickOutsideHandler = handler
                    document.addEventListener('click', handler)
                },
                unmounted (el) {
                    document.removeEventListener('click', el._clickOutsideHandler)
                    delete el._clickOutsideHandler
                }
            } */
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
