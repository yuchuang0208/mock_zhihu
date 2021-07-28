<template>
    <div
        class="YcDropdownItem"
        :class="{'YcDropdownItem-disabled': disabled}"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'YcDropdownItem',
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        },
        setup () {
            return {}
        }
    })
</script>

<style scoped>
    .YcDropdownItem {
        padding: 4px 10px;
    }
    .YcDropdownItem-disabled {
        color: #CCC;
        pointer-events: none;
        background-color: transparent;
    }
</style>
<style>
    .YcDropdownItem {

    }
</style>
